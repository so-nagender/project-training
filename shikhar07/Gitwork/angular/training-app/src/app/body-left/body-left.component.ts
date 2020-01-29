import { Component, OnInit } from '@angular/core';
import {books} from '../data';


@Component({
  selector: 'app-body-left',
  templateUrl: './body-left.component.html',
  styleUrls: ['./body-left.component.css']
})
export class BodyLeftComponent implements OnInit {
  toggle = false;
  selectedBooks: any;
  books = books


  constructor() { }

  ngOnInit() {
  }
  toggleSetter(){
    if (this.toggle){
      this.toggle = false;
    }
    this.toggle = true;
  }
  showDetails(value){
    this.selectedBooks = value;
    this.toggle = true;
  }
}
