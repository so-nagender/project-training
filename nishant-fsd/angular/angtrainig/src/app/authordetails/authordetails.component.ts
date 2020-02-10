import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-authordetails',
  templateUrl: './authordetails.component.html',
  styleUrls: ['./authordetails.component.css']
})
export class AuthordetailsComponent implements OnInit {
  @Input()
  author
  constructor() { }
  ngOnInit() {
  }

}
