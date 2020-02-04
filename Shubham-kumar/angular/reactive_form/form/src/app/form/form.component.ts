import { Component, OnInit } from '@angular/core';
import  { FormBuilder , FormGroup, Validators} from '@angular/forms';




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  checkoutForm;
  submitted= false;
 

  constructor(
    private formBuilder : FormBuilder,
    ) {
      this.checkoutForm = this.formBuilder.group({
        firstname: ['', Validators.required],
        lastname:['', Validators.required],
        email:['', [Validators.required, Validators.email]],
        cemail:['', [Validators.required, Validators.email]],
        Address: ['', Validators.required],
        Age:['', Validators.required]
      });
   }
   get f() { return this.checkoutForm.controls; }
   onSubmit(){
      this.submitted = true;

      // stop here if form is invalid
      if (this.checkoutForm.invalid) 
      {
        alert("form error")
        if(this.checkoutForm.value.email != this.checkoutForm.value.cemail){
          alert("email msmatched")
        }
      }
      else{
        alert('ok')
      }
   }
   
  

  ngOnInit() {
  }

}
