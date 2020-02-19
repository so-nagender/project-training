import { Component, OnInit } from '@angular/core';
import { book } from '../../data';

@Component({
  selector: 'app-body-left',
  templateUrl: './body-left.component.html',
  styleUrls: ['./body-left.component.css']
})
export class BodyLeftComponent implements OnInit {
  books = book;

  constructor() {}

  ngOnInit() {}
  createRange(num) {
    const items: number[] = [];
    for (let i = 1; i <= num; i++) {
      items.push(i);
    }
    return items;
  }
}
