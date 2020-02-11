import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../movieservice.service';

@Component({
  selector: 'app-mid-part',
  templateUrl: './mid-part.component.html',
  styleUrls: ['./mid-part.component.css']
})
export class MidPartComponent implements OnInit {
  

  movie: { id: number; "name": string; "director": string; }[];
 
 
  constructor(private movieservice: MovieserviceService) { }

  ngOnInit() {
    this.movie = this.movieservice.movie();
  }

}