import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-author-template',
  templateUrl: './author-template.component.html',
  styleUrls: ['./author-template.component.css']
})
export class AuthorTemplateComponent implements OnInit {
  @Input() author;

  constructor() {}

  ngOnInit() {}
}
