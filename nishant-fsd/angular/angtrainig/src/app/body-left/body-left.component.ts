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
   selectedbook: any
   toggle=false
  ngOnInit() {
  }
  togglesetter(){
    console.log(this.toggle);
    if(this.toggle){
      this.toggle=false
    }
      
  }
  showdetail(data){
    this.selectedbook=data
    this.toggle=true
  }
 
}
