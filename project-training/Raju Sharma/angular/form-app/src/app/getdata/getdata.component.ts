import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.css']
})
export class GetdataComponent implements OnInit {
  todaydate: Date;
  movieDetails: object;

  constructor(private Myser: MyserviceService) { }

  ngOnInit() {
    this.todaydate = this.Myser.todayDate();
    this.movieDetails = this.Myser.movieList();
  }

}
