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
  user: any;
  teamID: string;
  id: string;

  constructor(private Myser: MyserviceService, private activatedRoute: ActivatedRoute) {
    this.teamID = this.activatedRoute.snapshot.paramMap.get('id'); // Getting ID from url dynamically
  }

  ngOnInit() {
    this.todaydate = this.Myser.todayDate();
    this.movieDetails = this.Myser.movieList();
    this.activatedRoute.data.subscribe(data => {
      this.users = data.users;
    });
    this.Myser.getUsers().subscribe(res => {
      this.users = res;
    });
  }
  delete(id) {
    this.Myser.deletData(id).subscribe();
    this.activatedRoute.data.subscribe(data => {
      this.users = data.users;
    })
    this.Myser.getUsers().subscribe(res => {
      this.users = res;
    });
  }
}
