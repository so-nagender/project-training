import { Component, OnInit } from '@angular/core';
import { authors } from '../../data';
@Component({
  selector: 'app-body-right',
  templateUrl: './body-right.component.html',
  styleUrls: ['./body-right.component.css']
})
export class BodyRightComponent implements OnInit {
  author = authors;
  constructor() {}
  shouldShowAuthorDetails = false;
  selectedAuthor;

  ngOnInit() {
    console.log(this.author);
  }

  createRange(num) {
    let items: number[] = [];
    for (let i = 1; i <= num; i++) {
      items.push(i);
    }
    return items;
  }

  showDetails(value) {
    this.shouldShowAuthorDetails = true;
    this.selectedAuthor = value;
  }

  showMainList() {
    this.shouldShowAuthorDetails = false;
  }
}
