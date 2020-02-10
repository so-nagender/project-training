import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itemadded',
  templateUrl: './itemadded.component.html',
  styleUrls: ['./itemadded.component.css']
})
export class ItemaddedComponent implements OnInit {
  total1=0
  total2=0
  grandtotal=0
  toggle=false
  constructor() { }

  ngOnInit() {
  }
  add(){
    this.toggle=true
    this.total1+=1
    this. grandtotal=this.total1+this.total2
  }
  subtract(){
    this.toggle=true
    if(this.total1>0)
    {
    this.total1-=1
    }
    else
    {
      this.total1=0;
    }
    this.grandtotal=this.total1+this.total2
  }
  add1(){
    this.toggle=true
    this.total2+=1
    this. grandtotal=this.total1+this.total2
  }
  subtract1(){
    this.toggle=true
    if(this.total2>0)
    {
    this.total2-=1
    }
    else{
      this.total2=0
    }
    this. grandtotal=this.total1+this.total2
  }
 
}
