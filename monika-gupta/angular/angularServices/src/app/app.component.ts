import { Component } from '@angular/core';
import { MyServicesService } from './my-services.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularServices';
  formData;
  submitted: boolean = false;
  todaydate;
  movieList
  apiTeam;
  user;
  teamName;
  teamDes;
  obj;
  formData1;
  
 
  constructor(private http: HttpClient, private myservice: MyServicesService, private formBuilder: FormBuilder) {}


  
  ngOnInit() {
    this.todaydate = this.myservice.todayDate();
    this.movieList = this.myservice.movies();
    this.getTeams();
    
    this.formData = this.formBuilder.group({
      name: ['', Validators.required],
      des: ['', Validators.required]
    });
    this.formData1 = this.formBuilder.group({
      id : [''],
      name: [''],
      des: ['']
    });
  }
  
  get u() { return this.formData.controls; }

  getTeams() {
    this.myservice.getTeams().subscribe((res)=>{
      console.log(res);
      this.apiTeam = res;
    });
  }

  onSubmit() {
    this.submitted = true;
    this.teamName = this.formData.controls.name.value;
    this.teamDes = this.formData.controls.des.value;
    this.obj = { "name" : this.teamName, "description" : this.teamDes };
    this.myservice.setTeams(this.obj).subscribe();
    this.getTeams();
    if (this.formData.invalid) {
      return;
    }
    
  }

  onUpdate() {
    this.submitted = true;
    let teamName = this.formData1.controls.name.value;
    let teamDes = this.formData1.controls.des.value;
    let obj = { "name" : teamName ,"description" : teamDes };
    this.myservice.updateTeams(obj).subscribe();
    this.getTeams();
  }

 
  
}
