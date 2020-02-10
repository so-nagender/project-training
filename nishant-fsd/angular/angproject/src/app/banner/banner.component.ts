import { Component, OnInit } from '@angular/core';
import {MovieserviceService} from '../movieservice.service';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  movie: any;
  moviename:any;
  username:any;
  constructor(private movieservice: MovieserviceService ) {}
  ngOnInit() {
    this.movie = this.movieservice.movie();
    
  }
  save(){
    return this.username;
   }
  

}
