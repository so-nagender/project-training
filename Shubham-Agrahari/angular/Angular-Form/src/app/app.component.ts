import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {enableProdMode} from '@angular/core';

enableProdMode();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
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
        cEmail: ['', [Validators.required, Validators.minLength(6)]],
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

onSubmit()
  {
    this.submitted = true;
    console.log("Hello")

    // stop here if form is invalid
    if (this.checkoutForm.invalid) {
      
      alert("Form Not Filled Properly");
      return;
    }
    console.log("SUCCESS!! :-)")
    console.log(this.checkoutForm.value)
    // console.log(this.checkoutForm.value)
  }


}

 


