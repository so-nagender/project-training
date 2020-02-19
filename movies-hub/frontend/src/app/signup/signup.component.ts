import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  checkoutForm: FormGroup;
  constructor( private formBuilder: FormBuilder) { 
    this.checkoutForm = this.formBuilder.group({
      Name: new FormControl ('', Validators.required),
      email: new FormControl ('', [Validators.required, Validators.email]),
      password: new FormControl ('', Validators.required),
      retypepassword: new FormControl ('', Validators.required)
  });
}

  ngOnInit() {
  }
}
