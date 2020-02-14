import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  teamID: any;
  users: any;
  constructor(private Myser: MyserviceService, private activatedRoute: ActivatedRoute) {
    this.teamID = this.activatedRoute.snapshot.paramMap.get('id'); // Geting userID from URL Dynamically...
  }
  ngOnInit() {
    // Getting single user details from service using API and dynamic ID.
    this.Myser.getSingleElementById(this.teamID).subscribe(res => {
      this.users = res;
    });
  }
}
