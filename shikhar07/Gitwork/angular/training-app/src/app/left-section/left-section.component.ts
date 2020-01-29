import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-left-section',
  templateUrl: './left-section.component.html',
  styleUrls: ['./left-section.component.css']
})
export class LeftSectionComponent implements OnInit {

  @Input()
  books;
  constructor() { }

  ngOnInit() {
  }

}
