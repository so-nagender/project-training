import { Component, OnInit } from '@angular/core';
import {author} from '../../data'
@Component({
  selector: 'app-body-right',
  templateUrl: './body-right.component.html',
  styleUrls: ['./body-right.component.css']
})
export class BodyRightComponent implements OnInit {
  author1 = author;
  constructor() { }

  ngOnInit() {
  }

}
