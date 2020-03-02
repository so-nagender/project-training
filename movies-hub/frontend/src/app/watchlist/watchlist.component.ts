import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  movies: any;

  constructor(private myservice: ApiserviceService) { }

  ngOnInit() {
    this.getWL();
  }
  getWL() {
    this.myservice.getWatchList().subscribe((res) => {
      this.movies = res;
      console.log(this.movies);
    });
  }

}
