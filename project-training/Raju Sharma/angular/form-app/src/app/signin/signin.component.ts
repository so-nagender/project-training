import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MustMatch } from '../match';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  datas: FormGroup;
  submitted: boolean = false;
  constructor( private FormBuilder: FormBuilder) {}
  ngOnInit() {
    this.datas = this.FormBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',Validators.required],
      confirmpassword: ['',Validators.required],
    },
    {
      validator: MustMatch('password', 'confirmpassword'),
  });
  }
  get f() { return this.datas.controls; }

  onSubmit(val) {
    this.submitted = true;
    if (this.datas.invalid) {
      console.log(this.datas.controls)
      return;
    }
    console.warn('Your Input has been submitted',val);

        alert('SUCCESS!! :-)')
  }
}
