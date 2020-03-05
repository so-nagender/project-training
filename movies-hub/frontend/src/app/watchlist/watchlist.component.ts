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
  
  watchlist: any;
  currentRate = 8;

  constructor(private myservice: ApiserviceService) { }

  ngOnInit() {
    this.myservice.getWatchList().subscribe((res) => {
      this.watchlist = res;
      console.log(res);
      console.log(this.watchlist[0].user);
      let temp = this.watchlist[0].movieId[1];
      console.log(temp);
      this.myservice.getSingleElementById(temp).subscribe((res) => {
        this.movies = res;
      });

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
