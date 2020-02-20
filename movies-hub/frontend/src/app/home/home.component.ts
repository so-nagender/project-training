import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movieDetails: any;
  users: any;

  constructor(private myservice: ApiserviceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.myservice.getUsers().subscribe(res => {
      this.users = res;
      console.log(this.users.title)
    });
  }

}
