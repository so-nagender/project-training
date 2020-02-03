import { Component, ViewEncapsulation } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-new';
  checkoutForm: FormGroup;
constructor(
  private formBuilder: FormBuilder,
)
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
}