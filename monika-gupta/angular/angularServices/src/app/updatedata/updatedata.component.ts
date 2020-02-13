import { Component, OnInit } from '@angular/core';
import { MyServicesService } from '../my-services.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-updatedata',
  templateUrl: './updatedata.component.html',
  styleUrls: ['./updatedata.component.css']
})
export class UpdatedataComponent implements OnInit {
  formData1;
  apiTeam;
  submitted: boolean = false;
  id;
  a;

  constructor(private http: HttpClient, private myservice: MyServicesService, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }
   

  ngOnInit() {
    this.formValue();
    this.getTeams();
  }

  onUpdate() {
    this.submitted = true;
    let teamName = this.formData1.controls.name.value;
    let teamDes = this.formData1.controls.des.value;
    let obj = { "name" : teamName ,"description" : teamDes };
    this.myservice.updateTeams(obj , this.id).subscribe();
    this.getTeams();

    
  }

  getTeams() {
    console.log(this.id)
    this.myservice.getMovie(this.id).subscribe((res)=>{
      console.log(res);
      this.apiTeam = res;
      console.log(this.apiTeam.name);
      this.a = this.apiTeam.name
    });
  }

  formValue(){
    this.formData1 = this.formBuilder.group({
      name: [''],
      des: ['']
    });

  }

}

