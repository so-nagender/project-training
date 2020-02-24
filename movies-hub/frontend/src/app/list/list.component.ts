import {Component, OnInit} from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  movies: any;
  movieID: string;
  cat: any;
  constructor(private myservice: ApiserviceService, private activatedRoute: ActivatedRoute, private router :  Router) {
    let id = this.activatedRoute.snapshot.params.id;
   }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.movies = data.users;
    });
    this.myservice.getMovies().subscribe(res => {
      this.movies = res;
    });
  }
  delete(id) {
    this.myservice.deleteMovie(id).subscribe();
    this.activatedRoute.data.subscribe(data => {
      this.movies = data.users;
    })
    this.myservice.getMovies().subscribe(res => {
      this.movies = res;
    });
  }

 
}
