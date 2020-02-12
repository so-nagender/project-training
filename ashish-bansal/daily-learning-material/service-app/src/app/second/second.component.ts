import { Component, OnInit } from '@angular/core';
import {TimeServiceService} from '../time-service.service'

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {


  constructor(private movielist : TimeServiceService) { }

  datas : any;

  ngOnInit() {
    this.movielist.getData().subscribe((res)=>{
      console.log(res);
      this.datas = res;
    });
  }

  onClick(movie){
    this.movielist.id = movie.id
    console.log(this.movielist.id)
  }
  onDelete(movie){
    let x = movie.id
    this.movielist.deleteData(x).subscribe();
    this.movielist.getData().subscribe((res)=>{
      this.datas = res;
    })
  }

}
