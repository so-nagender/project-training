import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  title = 'form';
  myform;
  confirmemailerr=false;
  submitted=false;
  constructor(private formBuilder: FormBuilder)
    {
      this.myform=this.formBuilder.group({
        email:['',Validators.required],
        password:['',Validators.required],
      });
    }
    get f() { return this.myform.controls; }

    func() {
      
       this.submitted=true;
      if (this.myform.invalid) {
        return;
    }
    alert('SUCCESS!! :-)')
    }

}
