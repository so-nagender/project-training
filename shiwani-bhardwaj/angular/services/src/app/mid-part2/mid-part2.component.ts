import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../movieservice.service';

@Component({
  selector: 'app-mid-part2',
  templateUrl: './mid-part2.component.html',
  styleUrls: ['./mid-part2.component.css']
})
export class MidPart2Component implements OnInit {
  

  movie: { id: number; "name": string; "director": string; }[];
 
 
  constructor(private movieservice: MovieserviceService) { }

  ngOnInit() {
    this.movie = this.movieservice.movie();
  }

}