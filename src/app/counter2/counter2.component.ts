import { Component, OnInit } from '@angular/core';
import {Couter2Service} from './couter2.service';
@Component({
  selector: 'app-counter2',
  templateUrl: './counter2.component.html',
  styleUrls: ['./counter2.component.css']
})
export class Counter2Component implements OnInit {

  startedCount = 0; 
  pausedCount = 0;
  eventsArray: Array<any> = [];
  hideTimeStamps: boolean;

  constructor(private counterService: Couter2Service) { }
  ngOnInit(): void {
    this.counterService.counterDetails.subscribe((data)=>{
      // console.log("Data---------", data);
      this.startedCount = data.startedCount;
      this.pausedCount = data.pausedCount;
      this.hideTimeStamps = data.hideTimeStamps;

      if(data.eventType == 'reset'){
        this.eventsArray = [];
      }

      if(data.eventDetails){
        this.eventsArray = data.eventDetails;
      } 

    });

    this.counterService.refreshControlCounter.subscribe(data => {
      // console.log("Reset Parent------");
      this.startedCount = 0; 
      this.pausedCount = 0;
      this.eventsArray = [];
      this.hideTimeStamps = false;
    })
    /* this.startedCount = this.counterService.startedCount;
    this.pausedCount = this.counterService.pausedCount;
    this.hideTimeStamps = this.counterService.hideTimeStamps;
    this.eventsArray = this.counterService.eventsArray; */
  }
}
