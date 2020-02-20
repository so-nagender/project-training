import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ApiService} from '.././api.service'

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

 
  constructor(private api: ApiService) { 
    
  }

  ngOnInit() {
    
  }
  onSubmit(form) {
    this.api.getbookdetails(this.form.value.email, this.form.value.password)
  }
}
