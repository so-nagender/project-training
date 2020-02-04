import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  title = 'form';
  myform;
  confirmemailerr=false;
  submitted=false;
  constructor(private formBuilder: FormBuilder)
    {
      this.myform=this.formBuilder.group({
        firstname:['',Validators.required],
        lastname:['',Validators.required],
        email:['',[Validators.required,Validators.email]],
        confirmemail:['',Validators.required],
        address:['',Validators.required],
        age:['',[Validators.required,Validators.pattern("^[0-9]*")]]
      });
    }
    get f() { return this.myform.controls; }

    func() {
      if(this.myform.value.email!=this.myform.value.confirmemail)
      {
        this.confirmemailerr=true
      }
       this.submitted=true;
      if (this.myform.invalid) {
        return;
    }
    alert('SUCCESS!! :-)')
    }

}
