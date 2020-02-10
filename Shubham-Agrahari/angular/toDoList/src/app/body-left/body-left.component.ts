import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-body-left',
  templateUrl: './body-left.component.html',
  styleUrls: ['./body-left.component.css']
})
export class BodyLeftComponent implements OnInit {
  todaydate;
  movie:{id: any, name: any}[];

  constructor(private myservice: MyserviceService) {}

  ngOnInit() {
    // this.todaydate = this.myservice.todayDate();
    this.movie = this.myservice.movie();
    

  }

}
