import { Component, OnInit } from '@angular/core';
import {authors} from '../data';

@Component({
  selector: 'app-body-right',
  templateUrl: './body-right.component.html',
  styleUrls: ['./body-right.component.css']
})
export class BodyRightComponent implements OnInit {
  author = authors;

  constructor() { }

  ngOnInit() {
  }

}
