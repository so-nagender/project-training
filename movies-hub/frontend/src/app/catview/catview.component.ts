import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catview',
  templateUrl: './catview.component.html',
  styleUrls: ['./catview.component.css']
})
export class CatviewComponent implements OnInit {
  catid: any;
  catg: any;
  movies: any;
  id: any;
  constructor(private myservice: ApiserviceService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.id = this.activatedRoute.snapshot.params.id
   }

  ngOnInit() {
    this.myservice.getData().subscribe((catiId) => {
      const id = catiId;
      this.getMoviesByCatg(id).subscribe(res => {
        console.log("with subject",id)
        this.catg = res.genre;
        console.log(res)
        this.movies = res.movies;
        this.movies.forEach(item => (item.rating = parseInt(item.rating,10)));
      });
    });
    this.myservice.setData(this.activatedRoute.snapshot.params.id);
  }

  getMoviesByCatg(id) {
    return this.myservice.getMoviesByCatg(id);
  }
  // getCatById() {
  //   this.myservice.getData().subscribe( () => {
  //     const id = this.activatedRoute.snapshot.params.id
  //     this.myservice.getMoviesByCatg(id).subscribe(res => {
  //       console.log(id)
  //       this.catg = res.genre;
  //       console.log(res)
  //       this.movies = res.movies;
  //     });
  //   });
  // }
  createRange(num) {
    const items: number[] = [];
    for (let i = 1; i <= num; i++) {
      items.push(i);
    }
    return items;
  }
}
