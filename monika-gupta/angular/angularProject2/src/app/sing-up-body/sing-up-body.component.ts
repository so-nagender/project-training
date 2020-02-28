import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../../emailvalidator';

@Component({
  selector: 'app-sing-up-body',
  templateUrl: './sing-up-body.component.html',
  styleUrls: ['./sing-up-body.component.css']
})
export class SingUpBodyComponent implements OnInit {

  formData;
  submitted: boolean = false;

  constructor( private formBuilder: FormBuilder ) {}
 
  ngOnInit() {
    this.formData = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cemail: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      age: [ , [Validators.required, Validators.min(1), Validators.max(99)]],
    },
    {
      validator: MustMatch('email', 'cemail')
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