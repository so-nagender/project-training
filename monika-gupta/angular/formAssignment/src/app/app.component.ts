import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formAssignment';
  formData;
  submitted: boolean = false;

  constructor( private formBuilder: FormBuilder ) {}
 
  ngOnInit() {
    this.formData = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cemail: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      age: ['', Validators.required],
    });
  }
  get f() { return this.formData.controls; }
  
  onSubmit(customerData) {
    this.submitted = true;
    
    if (this.formData.invalid) {
      return;
    }
    var checkAge = document.getElementById("age").value;
    if (checkAge<1 || checkAge > 150){
      alert("Please enter valid age");
    }
    console.warn('Your Data is recorded', customerData);
    alert('SUCCESS!! :-)')
  }
}
