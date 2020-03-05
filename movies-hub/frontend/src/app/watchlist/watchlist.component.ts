import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  ctrl = new FormControl(null, [Validators.required]);
  movies: any;

  toggle() {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }
  

  constructor(private myservice: ApiserviceService) { }

  ngOnInit() {
    this.getWL();
  }
  getWL() {
    this.myservice.getWatchList().subscribe((res) => {
      this.movies = res;
      console.log(res.movie);
    });
  }
  createRange(num) {
    const items: number[] = [];
    for (let i = 1; i <= num; i++) {
      items.push(i);
    }
    return items;
  }

}
