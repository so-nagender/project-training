import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, EmailValidator } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {
  form = new FormGroup({
    fname: new FormControl('',Validators.required),
    lname: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
    password2: new FormControl('',[Validators.required, Validators.minLength(6)])
  })

  constructor(private api: ApiService) { }
 

  ngOnInit() {
  }

  onSubmit(form) {
    if (this.form.value.password == this.form.value.password2){
      const password = this.form.value.password
     this.api.postloginDetails(this.form.value.email,password)
  }
  else {
    console.log("password doesnt match")
  }
}

  
  
 

  
}
