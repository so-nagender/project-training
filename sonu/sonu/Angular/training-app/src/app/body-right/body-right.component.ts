import { Component, OnInit } from '@angular/core';
import { authorData } from '../../data'

@Component({
  selector: 'app-body-right',
  templateUrl: './body-right.component.html',
  styleUrls: ['./body-right.component.css']
})
export class BodyRightComponent implements OnInit {
authorinfo=authorData
toggle = false;

  constructor() { }
  ngOnInit() {
  }
  // createRange(num) {
  //   let items: number[] = [];
  //   for(let i=1; i<num; i++){
  //     items.push(i);
  //   }
  // }

}
