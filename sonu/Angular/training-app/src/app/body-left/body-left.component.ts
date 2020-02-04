import { Component, OnInit } from "@angular/core";
import { bookdata } from "../../data";

@Component({
  selector: "app-body-left",
  templateUrl: "./body-left.component.html",
  styleUrls: ["./body-left.component.css"]
})
export class BodyLeftComponent implements OnInit {
  book = bookdata;
  toggle = false;

  selectedbook: any;
  constructor() {}

  ngOnInit() {}

  toggleSetter() {
    if (this.toggle) {
      this.toggle = false;
    }
    this.toggle = true;
  }

  showDetail(value) {
    this.selectedbook = value;
    this.toggle = true;
  }

  createRange(num) {
    let items: number[] = [];
    for (let i = 1; i <= num; i++) {
      items.push(i);
    }
    return items;
  }
}
