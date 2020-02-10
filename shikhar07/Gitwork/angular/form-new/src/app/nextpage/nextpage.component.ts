import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-nextpage',
  templateUrl: './nextpage.component.html',
  styleUrls: ['./nextpage.component.css']
})
export class NextpageComponent implements OnInit {
nums;

  constructor(private movies : MoviesService) {
    this.nums= this.movies.movielist(); 
   }

  ngOnInit() {
  }

}
