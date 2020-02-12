import { Component, OnInit } from '@angular/core';
import { MyServicesService } from '../my-services.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent implements OnInit {
  todaydate;
  apiTeam;

  constructor(private http: HttpClient, private myservice: MyServicesService) { }

  ngOnInit() {
    this.todaydate = this.myservice.todayDate();
    this.getTeams();
  }
  
  getTeams() {
    this.myservice.getTeams().subscribe((res)=>{
      console.log(res);
      this.apiTeam = res;
    });
  }

}
