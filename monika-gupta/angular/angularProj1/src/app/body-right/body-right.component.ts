import { Component, OnInit } from '@angular/core';
import { author } from '../../data';


@Component({
  selector: 'app-body-right',
  templateUrl: './body-right.component.html',
  styleUrls: ['./body-right.component.css']
})
export class BodyRightComponent implements OnInit {
 

  author = author;
  toggle = false;
  selectedAuthor : any ;
  constructor() { }

  ngOnInit() {
  }
  toggleSetter(){
    if(this.toggle){
      this.toggle = false;
    }
    this.toggle = true;
  }
  showDetail(authordetailData){
    this.selectedAuthor = authordetailData;
    this.toggle = true;
  }
  stars(x) {
    let item: number[] =[];
    for(let i=1; i<=x; i++)
    {
      item.push(i);
    }
    return item;
  }

}
