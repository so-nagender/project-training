import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {
   @Input()
   book
  constructor() { }

  ngOnInit() {
  }

}
