import { Component, OnInit } from '@angular/core';
import {FormsModule,ReactiveFormsModule, Validators, ValidatorFn} from '@angular/forms'
import {FormControl,FormGroup} from '@angular/forms'
import {FormBuilder} from '@angular/forms'
import { not } from '@angular/compiler/src/output/output_ast';
import {ValidateEmail} from './validateemail'
import { from } from 'rxjs';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  constructor(private fb : FormBuilder) { }
  
  checkoutForm = this.fb.group({
    firstName : ['',Validators.required],
    lastName : ['',Validators.required],
    Age : [,[Validators.required,Validators.max(110),Validators.min(1)]],
    Email : ['',[Validators.required,Validators.email]],
    ConfirmEmail : ['',[Validators.required,Validators.email]],
    street : ['',Validators.required],
    country : ['',Validators.required]
  },{
    validator: ValidateEmail('Email', 'ConfirmEmail')
})

  ngOnInit() {
  }

  get f() { return this.checkoutForm.controls; }

  onSave(){
    console.log(this.checkoutForm.controls)
    if (this.checkoutForm.invalid) {
      return;
  }  
  }

}
