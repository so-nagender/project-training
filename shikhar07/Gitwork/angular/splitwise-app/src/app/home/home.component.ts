import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Router } from '@angular/router'; 




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  datas


  constructor(private movies : MoviesService, private router :  Router, ) { 
 
  }


  ngOnInit() {
    this.movies.getData().subscribe((res)=>{
      this.datas = res;
    });
   }

   }
  
