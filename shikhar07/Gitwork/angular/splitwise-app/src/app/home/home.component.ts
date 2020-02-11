import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  datas

  constructor(private movies : MoviesService) { }

  ngOnInit() {
    this.movies.getData().subscribe((res)=>{
      this.datas = res;
    });
   }
  }
