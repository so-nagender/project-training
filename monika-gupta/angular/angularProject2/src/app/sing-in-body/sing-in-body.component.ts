import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../../emailvalidator';


@Component({
  selector: 'app-sing-in-body',
  templateUrl: './sing-in-body.component.html',
  styleUrls: ['./sing-in-body.component.css']
})
export class SingInBodyComponent implements OnInit {

  formData;
  submitted: boolean = false;

  constructor( private formBuilder: FormBuilder ) {}
 
  ngOnInit() {
    this.formData = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cpassword: ['', Validators.required]
    },
    {
      validator: MustMatch('password', 'cpassword')
    });
  }
  get f() { return this.formData.controls; }
  
  onSubmit(customerData) {
    this.submitted = true;
    
    if (this.formData.invalid) {
      return;
    }
    console.warn('Your Data is recorded', customerData);
    alert('SUCCESS!! :-)')
  }
}