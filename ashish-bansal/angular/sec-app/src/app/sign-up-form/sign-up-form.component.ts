import { Component, OnInit } from '@angular/core';
import {FormsModule,ReactiveFormsModule, Validators, ValidatorFn} from '@angular/forms';
import {FormControl,FormGroup} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  signUp = this.fb.group({
    Email : ['',[Validators.required,Validators.email]],
    Password : ['',Validators.required],
    Address : ['',Validators.required],
    Address2 : ['',Validators.required],
    City : ['',Validators.required],
    State : ['',Validators.required],
    Zip : ['',Validators.required],
  })

  get f() { return this.signUp.controls; }

  ngOnInit() {
  }

}
