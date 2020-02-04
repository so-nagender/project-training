import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn} from '@angular/forms';
import {enableProdMode} from '@angular/core';

enableProdMode();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  static pwdMatchValidator: ValidatorFn;
  static checkoutForm: any;
  ngOnInit()  {
    // throw new Error("Method not implemented.");
  }
  
  title = 'Angular-Form';
  checkoutForm: FormGroup;
  submitted = false;
  
  

  constructor(private formBuilder: FormBuilder){  
    this.checkoutForm = this.formBuilder.group({      
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        cEmail: ['',[Validators.required, Validators.email] ],
        address: ['', [Validators.required, Validators.minLength(6)]],
        age:['', Validators.compose([
          Validators.required, AppComponent.nonZero ])
        ]
        // age: ['', [Validators.required]]
    }); 


  }
  get f() { return this.checkoutForm.controls; }

  static nonZero(control):{ [key: string]: any; } {
    if (Number(control.value) < 0) {
      console.log('negative');
      return {nonZero: true};
    } else {
      console.log('positive');
      return null;
    }
  }
  // static emailValidator(){
  //   if(this.checkoutForm.get('email').value === this.checkoutForm.get('cEmail').value)
  // }
  // static pwdMatchValidator(frm: FormGroup) {
  //   debugger
  //   if(frm.get('email').value === frm.get('cEmail').value){
  //     console.log('EmailVerified');
  //     return {pwdMatchValidator: true};
  //   }
  //   else {
  //     console.log('Email not Verified');
  //     return null;
  //   }
      
  // }

onSubmit()
  {
    this.submitted = true;
    console.log("Hello")

    // stop here if form is invalid
    if (this.checkoutForm.invalid) { 
         
      
      alert("Form Not Filled Properly");
    
      }
      else if(this.checkoutForm.get('email').value != this.checkoutForm.get('cEmail').value){
        console.log('Email Not Verified');
      }
      // return;
     
      else{
        console.log("SUCCESS!! :-)")
      console.log(this.checkoutForm.value)
    // console.log(this.checkoutForm.value)
      }
  }



}


 


