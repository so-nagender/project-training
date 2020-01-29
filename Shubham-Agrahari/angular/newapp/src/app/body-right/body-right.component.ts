import { Component, OnInit } from '@angular/core';
import { authors } from '../../data';

@Component({
  selector: 'app-body-right',
  templateUrl: './body-right.component.html',
  styleUrls: ['./body-right.component.css']
})
export class BodyRightComponent implements OnInit {
  author = authors;
  toggle=false;
  selectedAuthor;

  constructor() { }

  ngOnInit() {
  }
  toggleSetter(){
    if(this.toggle){
      this.toggle=false;
    }
    this.toggle=true;
  }
  showDetails(value){
    this.toggle=true;
    this.selectedAuthor=value;
  }
  showMainList(){
    this.toggle=false;
  }

}
