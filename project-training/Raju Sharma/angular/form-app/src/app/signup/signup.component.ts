import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MustMatch } from '../match';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  data: FormGroup;
  submitted: boolean = false;
  constructor( private FormBuilder: FormBuilder) {}
  ngOnInit() {
    this.data = this.FormBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      confirmemail: ['',[Validators.required, Validators.email]],
      address: ['', Validators.required],
      age: [, [Validators.required, Validators.min(1), Validators.max(130)]]
    },
    {
      validator: MustMatch('email', 'confirmemail'),
  });
  }
  get f() { return this.data.controls; }

  onSubmit(val) {
    this.submitted = true;
    if (this.data.invalid) {
      console.log(this.data.controls)
      return;
    }
    console.warn('Your Input has been submitted',val);

        alert('SUCCESS!! :-)')
  }
}
