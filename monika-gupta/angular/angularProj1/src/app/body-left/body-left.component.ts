import { Component, OnInit } from '@angular/core';
import { book } from '../../data';


@Component({
  selector: 'app-body-left',
  templateUrl: './body-left.component.html',
  styleUrls: ['./body-left.component.css']
})
export class BodyLeftComponent implements OnInit {
  
  book = book;
  toggle = false;
  selectedbook : any ;

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
    this.selectedbook = authordetailData;
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
