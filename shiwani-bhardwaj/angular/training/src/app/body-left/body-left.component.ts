import { Component, OnInit } from '@angular/core';
import {  Books_data } from '../../data';

@Component({
  selector: 'app-body-left',
  templateUrl: './body-left.component.html',
  styleUrls: ['./body-left.component.css']
})
export class BodyLeftComponent implements OnInit {
   Book= Books_data
  constructor() { }

  ngOnInit() {
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
