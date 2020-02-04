import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
