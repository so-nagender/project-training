import { Component, OnInit } from '@angular/core';
import { books } from '../../data';

@Component({
  selector: 'app-body-left',
  templateUrl: './body-left.component.html',
  styleUrls: ['./body-left.component.css']
})
export class BodyLeftComponent implements OnInit {
  books = books;
  constructor() {}

  ngOnInit() {}
  rang(num) {
    let item: number[] = [];
    for (let i = 1; i <= num; i++) {
      item.push(i);
    }
    return item;
  }

  toggle = false;
  bookSelector: any;
  toggleSetter() {
    if (this.toggle) {
      this.toggle = false;
    }
    this.toggle = true;
  }

  showBookDetails(val) {
    this.bookSelector = val;
    this.toggle = true;
  }
}
