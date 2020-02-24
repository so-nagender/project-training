import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ApiService} from '.././api.service'

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form=new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)])
  })
  data: any;
  observeddata: any;

 
  constructor(private api: ApiService , private routes : Router) { 
    
  }

  ngOnInit() {
    
  }
  onSubmit(form) {
    this.api.postlogin(this.form.value.email, this.form.value.password)
  }
  viewData()
  {
     const data=this.api.viewdata().subscribe(data => { this.observeddata = data; console.log(this.observeddata)});

  }
}
