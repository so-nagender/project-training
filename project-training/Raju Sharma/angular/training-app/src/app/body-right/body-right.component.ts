import { Component, OnInit } from '@angular/core';
import { authors } from '../../data'
@Component({
  selector: 'app-body-right',
  templateUrl: './body-right.component.html',
  styleUrls: ['./body-right.component.css']
})
export class BodyRightComponent implements OnInit {
  authors = authors;
  constructor() { }

  ngOnInit() {
  }
  rang(num) {
    let item: number[] = [];
    for(let i=1; i<=num; i++)
    {
      item.push(i);
    }
    return item;
  }
}
