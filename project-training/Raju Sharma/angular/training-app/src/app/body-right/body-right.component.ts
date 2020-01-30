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
  // birthday = new Date(1988, 3, 15);
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

  toggle = false;
  authorSelector: any;
  toggleSetter() {
    if(this.toggle) {
      this.toggle = false;
    }
    this.toggle = true;
  }

  showDetailss(val) {
    this.authorSelector = val;
    this.toggle = true;
  }

}
