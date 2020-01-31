import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {
  @Input()
  detail;

  constructor() {}

  ngOnInit() {}
  stars(x) {
    const item: number[] = [];
    for (let i = 1; i <= x; i++) {
      item.push(i);
    }
    return item;
  }
}
