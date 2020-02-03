import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-app';
  data: FormGroup;
  submitted: boolean = false;
  //registerForm: FormGroup;
  //submitted: false;
  constructor( private FormBuilder: FormBuilder) {}

  ngOnInit() {
    this.data = this.FormBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      confirmemail: ['',[Validators.required, Validators.email]],
      address: ['', Validators.required],
      age: ['', Validators.required]
    });
  }
  get f() { return this.data.controls; }

  onSubmit(val) {
    // Process checkout data here
    
    //this.data.reset();
    this.submitted = true;
    if (this.data.invalid) {
      return;
      //this.submitted = false;
    }
    console.warn('Your Input has been submitted',val);

        alert('SUCCESS!! :-)')
  }
}

