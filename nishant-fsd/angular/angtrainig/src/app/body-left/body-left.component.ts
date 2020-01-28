import { Component, OnInit } from '@angular/core';
import {bookdata} from '../data'
@Component({
  selector: 'app-body-left',
  templateUrl: './body-left.component.html',
  styleUrls: ['./body-left.component.css']
})
export class BodyLeftComponent implements OnInit {
  bookdata=bookdata
  constructor() { }

  ngOnInit() {
  }

}
