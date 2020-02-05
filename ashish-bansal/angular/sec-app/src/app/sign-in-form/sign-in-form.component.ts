import { Component, OnInit } from '@angular/core';
import {FormsModule,ReactiveFormsModule, Validators, ValidatorFn} from '@angular/forms';
import {FormControl,FormGroup} from '@angular/forms';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {

  constructor(private fb :FormBuilder) { }

  signIn = this.fb.group({
    Email : ['',[Validators.required,Validators.email]],
    Password : ['',Validators.required],
  })

  get f() { return this.signIn.controls; }

  ngOnInit() {
  }

}
