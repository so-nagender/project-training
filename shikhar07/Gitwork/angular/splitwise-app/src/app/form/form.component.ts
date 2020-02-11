import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  checkoutForm: FormGroup;

  constructor( private formBuilder: FormBuilder) 
  {
    
      this.checkoutForm = this.formBuilder.group({
        firstName: new FormControl ('', Validators.required),
        lastName: new FormControl ('', Validators.required),
        email: new FormControl ('', [Validators.required, Validators.email]),
        Address: new FormControl ('', Validators.required),
        Age: new FormControl ('', [Validators.required, Validators.min(1)]),
      }
      );
  }
  onSubmit(customerData) {
  // Process checkout data here
    if (this.checkoutForm.invalid) {
    alert("Aish Karooo !!!!")
}
  console.warn('Form Details are', customerData);
  //this.checkoutForm.reset();
}
ngOnInit() {}
}
