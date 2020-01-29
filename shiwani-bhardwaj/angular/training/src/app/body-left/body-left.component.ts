import { Component, OnInit } from '@angular/core';
import {  Books_data } from '../../data';

@Component({
  selector: 'app-body-left',
  templateUrl: './body-left.component.html',
  styleUrls: ['./body-left.component.css']
})
export class BodyLeftComponent implements OnInit {
  toggle=false;
  selectedBook:any;
   Book= Books_data
  constructor() { }

  ngOnInit() {
  }
  toggleSetter()
   {
     if (this.toggle)
     {
       this.toggle=false;
     }
     this.toggle=true;
   }
   showdetails(value)
   {
    this.selectedBook=value;
    this.toggle=true;
   }
createRange(num)
{
  let items:number[]=[];
  for (let i=1;i<=num;i++)
  {
    items.push(i);
  }
  return items;
}
}
