import { Component } from '@angular/core';
import { MyDataService } from './my-data.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import {MyTeamComponent } from './my-team/my-team.component'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myFormData = new FormGroup(
    {
      'name': new FormControl('', Validators.required),
      'id': new FormControl('', Validators.required),
      'coach': new FormControl('', Validators.required),
      'description': new FormControl('', Validators.required)

    }

  )
  url1: any;
  id: any;
  updateData: any;

  constructor(private myservice: MyDataService, private http: HttpClient) { }
  teams$

  ngOnInit() {
    this.teams$ = this.myservice.data()
    this.teams$.subscribe((res) => {
      console.log(res);
    });
  }

  onDelete(obj) {

    console.log("_____________<>>>>>>>>>>>>>>>id ", obj)

    this.url1 = "/api/teams/" + (obj);
    console.log('this.url1==>', this.url1);
    this.http.delete(this.url1).toPromise().then((data: any) => {
      console.log(data);
      console.log("Delete is working");
      return this.teams$ = data;
    });
  }
  onPut() {
    this.url1 = `/api/teams/${this.myFormData.value.id}`;
    console.log('this.url1==>', this.url1);
    this.updateData = {
      'name': this.myFormData.value.name,
      'id': this.myFormData.value.id,
      'coach': this.myFormData.value.coach,
      'description': this.myFormData.value.description


    }
    this.http.put(this.url1, this.updateData).toPromise().then((data: any) => {
      console.log(data);
      return this.teams$ = data;

    });
  }
}
