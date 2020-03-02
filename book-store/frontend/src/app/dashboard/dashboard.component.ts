import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userlogindetail;
  constructor(private api : ApiService) { }

  ngOnInit() {

    this.userlogindetail= this.api.userdata.value;
    
  }


}
