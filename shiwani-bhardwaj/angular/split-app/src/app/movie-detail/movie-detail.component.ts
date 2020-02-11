import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../movieservice.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: { id: number; "name": string; "director": string; }[];
 
 
  constructor(private movieservice: MovieserviceService) { }

  ngOnInit() {
    this.movie = this.movieservice.movie();
  }

}
