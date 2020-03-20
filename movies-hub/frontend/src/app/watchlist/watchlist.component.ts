import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { CookieService } from 'ngx-cookie-service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  ctrl = new FormControl(null, [Validators.required]);
  // movies: any;

  toggle() {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }
  watchlist: any;
  currentRate = 8;
  movies = [];
  value: string;
  test = [];

  constructor(private myservice: ApiserviceService, private cookieService: CookieService) { }

  ngOnInit() {
    this.myservice.getWatchList().subscribe((res) => {
      this.watchlist = res;
      //console.log(res);
      // console.log(this.watchlist[0].user);
      //console.log(this.watchlist.length);
      for (let j = 0; j < this.watchlist.length; j++) {
        if (this.cookieService.get('Test') == (this.watchlist[j].user)) {
          let len = this.watchlist[j].movieId.length;
          // console.log(len);
          // console.log(this.watchlist.movieId)
          for (let i = 0; i < len; i++) {
            let temp = this.watchlist[j].movieId[i];
            //console.log(temp);
            this.myservice.getSingleElementById(temp).subscribe((response) => {
              this.movies.push(response);
              // console.log(this.movies);
            });
          }
        }
      }
    });
    this.value = this.cookieService.get('Test');
  }
  delete(id) {
    console.log(id)
    this.myservice.getWatchList().subscribe((res) => {
      this.watchlist = res;
      for (let i = 0; i < this.watchlist.length; i++) {
        if (this.value == this.watchlist[i].user) {
          console.log(this.value)
          let c = 0;
          let movieid
          for (let j = 0; j < this.watchlist[i].movieId.length; j++) {
            if (this.watchlist[i].movieId[j] == id) {
              c++;
              movieid = j;
            }
          }
          if (c > 0) {
            this.watchlist[i].movieId.splice(movieid, 1);
            console.log(this.watchlist[i].movieId);
            const obj = { "user": this.value, "movieId": this.watchlist[i].movieId };
            this.myservice.upDateWL(this.watchlist[i].id, obj).subscribe();
            location.reload();
          }
        }
      }
    }
    )
  }

  createRange(num) {
    const items: number[] = [];
    for (let i = 1; i <= num; i++) {
      items.push(i);
    }
    return items;
  }
}
