import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, NgForm, Validator, Validators, MaxLengthValidator} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-form';
  signupForm: FormGroup;
  firstName:string="";
  lastName:string="";

  constructor(private formb: FormBuilder ){
    this.signupForm=formb.group({
      fname: ['',[Validators.required,Validators.maxLength(10)]],
      lname: ['',[Validators.required,Validators.maxLength(10)]],
      email: ['',[Validators.required,Validators.email]],
      confemail: ['',[Validators.required,Validators.email]],
      address: ['',[Validators.required,Validators.maxLength(100)]],
      age: ['',[Validators.required,Validators.maxLength(100),]],
    });
  }
  ngOnInit(){
  }
  PostData(signupForm: any){
    console.log(signupForm.controls);
  }

}
