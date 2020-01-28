import { Component, OnInit } from '@angular/core';
import { book } from '../../data';


@Component({
  selector: 'app-body-left',
  templateUrl: './body-left.component.html',
  styleUrls: ['./body-left.component.css']
})
export class BodyLeftComponent implements OnInit {
  
  book = book;

  constructor() { }

  ngOnInit() {
  }
  stars(x) {
    let item: number[] =[];
    for(let i=1; i<=x; i++)
    {
      item.push(i);
    }
    return item;
  }

}
