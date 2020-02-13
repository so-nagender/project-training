import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.css']
})
export class GetdataComponent implements OnInit {
  data: FormGroup;
  todaydate: Date;
  movieDetails: object = {};
  users: any = {};
  user: any;
  teamID: string;
  id: string;

  constructor(private FormBuilder: FormBuilder, private Myser: MyserviceService, private activatedRoute: ActivatedRoute) {
    this.teamID = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.todaydate = this.Myser.todayDate();
    this.movieDetails = this.Myser.movieList();
    this.activatedRoute.data.subscribe((data) => {
      this.users = data.users;
    });
    this.Myser.getUsers().subscribe((res) => {
      this.users = res;
    });
  }
  // updateData() {
  //     const teamID = this.data.controls.id.value
  //     const teamName = this.data.controls.team.value
  //     const coachName = this.data.controls.teamcoach.value
  //     const teamDescription = this.data.controls.description.value
  //     const obj = { "name" : teamName ,"coach" : coachName,"description": teamDescription}
  //     this.Myser.update(teamID, obj).subscribe();
  //     this.Myser.getUsers().subscribe((res)=>{
  //       this.users = res;
  //     })
  // }
  delete(id) {
    this.Myser.deletData(id).subscribe();
    this.Myser.getUsers().subscribe((res) => {
      this.users = res;
    });
  }
}