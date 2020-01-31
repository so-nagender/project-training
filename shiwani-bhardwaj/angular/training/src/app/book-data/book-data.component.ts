import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-data',
  templateUrl: './book-data.component.html',
  styleUrls: ['./book-data.component.css']
})
export class BOOKDATAComponent implements OnInit {
  @Input()
  Books;
  constructor() { }

  ngOnInit() {
  console.log("value:-")
  console.log(this.Books)
  }

}
