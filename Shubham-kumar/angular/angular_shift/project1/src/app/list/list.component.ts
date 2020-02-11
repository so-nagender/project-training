import { Component, OnInit } from '@angular/core';
import { ListServiceService } from '../list-service.service';

import { Observable } from 'rxjs';
// import { ConstantPool } from '@angular/compiler';
​
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'], 
  providers : [ListServiceService]
})
export class ListComponent implements OnInit {
  data: any;
  myData:any;

  constructor( private list : ListServiceService, ) {  }

  ngOnInit() {
    this.data = this.list.MovieList()
    this.data.subscribe((res:any)=> {this.myData= res});
    
  }

}

