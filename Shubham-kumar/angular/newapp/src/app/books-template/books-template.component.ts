import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-books-template',
  templateUrl: './books-template.component.html',
  styleUrls: ['./books-template.component.css']
})
export class BooksTemplateComponent implements OnInit {

  @Input() books;
  constructor() { }

  ngOnInit() {
  }

}
