import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {ProductcatchService} from '../productcatch.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupform: FormGroup;

  constructor(private fb:FormBuilder,private serve : ProductcatchService,private router: Router,) { }
  get f() { return this.signupform.controls; }

  ngOnInit() {
    this.signupform = this.fb.group({
        username: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]]
    });
}

onSubmit(){
  if (this.signupform.invalid) {
    return;
  }
  else{
    const username = this.signupform.controls.username.value
    const pasword = this.signupform.controls.password.value
    const obj = { "name": username,"password": pasword};
    this.serve.signUp(obj).subscribe(res =>{localStorage.setItem("accessToken",res.accessToken);});
    this.router.navigate(['/categories']); 
  } 
}
onClose(){
  this.router.navigate(['/home']); 
}
}
