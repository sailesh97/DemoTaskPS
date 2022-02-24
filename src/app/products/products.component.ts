import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  viewType: string = 'grid';
  filterPrice: string = 'lowToHigh';
  productsArray:Array<any> = [
    {
        "price": 66
    },
    {
        "price": 49
    },
    {
        "price": 79
    },
    {
        "price": 60
    },
    {
        "price": 104
    },
    {
        "price": 20
    },
    {
        "price": 24
    },
    {
        "price": 21
    },
    {
        "price": 62
    },
    {
        "price": 102
    },
    {
        "price": 70
    },
    {
        "price": 20
    },
    {
        "price": 71
    },
    {
        "price": 99
    },
    {
        "price": 21
    },
    {
        "price": 52
    },
    {
        "price": 22
    },
    {
        "price": 50
    },
    {
        "price": 36
    },
    {
        "price": 26
    },
    {
        "price": 84
    },
    {
        "price": 22
    },
    {
        "price": 76
    },
    {
        "price": 83
    },
    {
        "price": 47
    },
    {
        "price": 42
    },
    {
        "price": 77
    },
    {
        "price": 43
    },
    {
        "price": 95
    },
    {
        "price": 87
    },
    {
        "price": 62
    },
    {
        "price": 13
    },
    {
        "price": 101
    },
    {
        "price": 68
    },
    {
        "price": 25
    },
    {
        "price": 65
    },
    {
        "price": 76
    },
    {
        "price": 65
    },
    {
        "price": 8
    },
    {
        "price": 58
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  changeViewByType(){
    return this.viewType == 'grid' ? 'productGrid' : 'productList';
  }

  onClickGrid(){
    this.viewType = 'grid';
  }

  onClickList(){
    this.viewType = 'list';
  }

  onPriceChange(event:any){
    this.filterPrice = event.target.value;
  }

}
