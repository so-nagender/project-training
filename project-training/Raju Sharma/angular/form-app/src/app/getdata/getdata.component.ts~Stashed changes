import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.css']
})
export class GetdataComponent implements OnInit {
  todaydate: Date;
  movieDetails: object = {};
  users: any = {};

  constructor(private Myser: MyserviceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.todaydate = this.Myser.todayDate();
    this.movieDetails = this.Myser.movieList();
    this.activatedRoute.data.subscribe((data) => {
      this.users = data.users;
      // console.log(this.users);
      });
  }

}
