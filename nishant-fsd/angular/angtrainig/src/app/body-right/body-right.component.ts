import { Component, OnInit } from '@angular/core';
import {authordata} from '../data';

@Component({
  selector: 'app-body-right',
  templateUrl: './body-right.component.html',
  styleUrls: ['./body-right.component.css']
})
export class BodyRightComponent implements OnInit {
   authordata=authordata
   selectedauthor:any
   toggle=false
  constructor() { }
 

  ngOnInit() {
  }
  togglesetter(){
    console.log(this.toggle);
    if(this.toggle){
      this.toggle=false
    }
      
  }
  createrange(num:number){
    let item:number[]=[]
    for(let i=1;i<=num;i++){
      item.push(i)
    }
    return item
  }
  showdetail(authdata){
    this.selectedauthor=authdata
    this.toggle=true
  }
 
}
