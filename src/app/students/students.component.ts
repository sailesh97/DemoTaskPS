import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SortOnClickPipe } from './sort-on-click.pipe';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  headings:Array<any> = [];
  dataArray: Array<any> = [];
  clickCounter:any={};
  dataArray2: Array<any> = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.http.get<any>("../../assets/json/students.json").subscribe(data=> {
    this.http.get<any>("../../assets/json/students2.json").subscribe(data=> {
      if(data && data["students"] && data["students"].length > 0){
        this.headings = Object.keys(data["students"][0]);
        this.dataArray = data["students"];
        this.dataArray2 = this.dataArray.slice();
      }
      for(let i = 0; i < this.headings.length; i++){
        let name = this.headings[i];
        this.clickCounter[name] = 0; 
      }
      // console.log(this.dataArray, this.headings);
      // console.log(this.clickCounter)
    });
  }

  columnClicked(eventData: any){
    let columnClicked = eventData.target.innerText;
    this.clickCounter[columnClicked] = this.clickCounter[columnClicked] + 1;
    // console.log(this.clickCounter)
    if(this.clickCounter[columnClicked] < 3){
      const sortPipe = new SortOnClickPipe();
      const sortedArray = sortPipe.transform(this.dataArray, columnClicked,this.clickCounter[columnClicked]);
      this.dataArray = sortedArray;
    } else{
      this.clickCounter[columnClicked] = 0;
      this.dataArray = this.dataArray2.slice();
    }
  }
}
