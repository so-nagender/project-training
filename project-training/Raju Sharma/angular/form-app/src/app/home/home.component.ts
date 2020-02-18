import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todaydate: Date;
  movieDetails: any = {};
  api: any = {};

  constructor(private Myser: MyserviceService, private http: HttpClient) {}

  ngOnInit() {
    this.todaydate = this.Myser.todayDate();
    this.movieDetails = this.Myser.movieList();
    this.Myser.teams().subscribe(res => {
      this.api = res;
    });
  }
}
