import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-authorsdetail',
  templateUrl: './authorsdetail.component.html',
  styleUrls: ['./authorsdetail.component.css']
})
export class AuthorsdetailComponent implements OnInit {
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
