import { Component, OnInit } from '@angular/core';
import { MyServicesService } from '../my-services.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {
  formData;
  teamName;
  teamDes;
  obj;
  apiTeam;

  constructor(
    private http: HttpClient,
    private myservice: MyServicesService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.formData = this.formBuilder.group({
      name: ['', Validators.required],
      des: ['', Validators.required]
    });
  }

  get u() {
    return this.formData.controls;
  }

  onSubmit() {
    if (this.formData.invalid) {
      return;
    } else {
      this.teamName = this.formData.controls.name.value;
      this.teamDes = this.formData.controls.des.value;
      this.obj = { name: this.teamName, description: this.teamDes };
      this.myservice.setTeams(this.obj).subscribe();
      this.getTeams();
    }
  }

  getTeams() {
    this.myservice.getTeams().subscribe(res => {
      console.log(res);
      this.apiTeam = res;
    });
  }
}
