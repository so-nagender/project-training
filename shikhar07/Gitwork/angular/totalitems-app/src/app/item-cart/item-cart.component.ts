import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-cart',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.css']
})
export class ItemCartComponent implements OnInit {
  firstAddition= 0;
  secondAddition= 0;
  totalSum= 0;
  toggle = false;
  constructor() { }

  ngOnInit() {
  }
  Addition(){
    this.toggle= true;
    this.firstAddition = this.firstAddition+1;
    this.totalSum = this.firstAddition + this.secondAddition;
  }
  Subtraction(){
    this.toggle= true;
    if(this.firstAddition > 0){
      this.firstAddition = this.firstAddition-1;
    }
    else{
      this.firstAddition = 0;
    }
    this.totalSum = this.firstAddition + this.secondAddition;
  }
  Addition1(){
    this.toggle= true;
    this.secondAddition = this.secondAddition+1;
    this.totalSum = this.firstAddition + this.secondAddition;
  }
  Subtraction1(){
    this.toggle= true;
    if(this.secondAddition > 0){
      this.secondAddition = this.secondAddition-1;
    }
    else{
      this.secondAddition = 0;
    }
    this.totalSum = this.firstAddition + this.secondAddition;
  }

}
