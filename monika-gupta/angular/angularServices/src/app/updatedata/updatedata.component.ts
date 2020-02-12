import { Component, OnInit } from '@angular/core';
import { MyServicesService } from '../my-services.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-updatedata',
  templateUrl: './updatedata.component.html',
  styleUrls: ['./updatedata.component.css']
})
export class UpdatedataComponent implements OnInit {
  formData1;
  apiTeam;
  submitted: boolean = false;
  id: any;

  constructor(private http: HttpClient, private myservice: MyServicesService, private formBuilder: FormBuilder) {}
   

  ngOnInit() {
    this.formData1 = this.formBuilder.group({
      name: [''],
      des: ['']
    });
  }

  onUpdate() {
    this.submitted = true;
    let teamName = this.formData1.controls.name.value;
    let teamDes = this.formData1.controls.des.value;
    let obj = { "name" : teamName ,"description" : teamDes };
    this.myservice.updateTeams(obj).subscribe();
    this.getTeams();
  }

  getTeams() {
    this.myservice.getTeams().subscribe((res)=>{
      console.log(res);
      this.apiTeam = res;
    });
  }


}

