import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {


userprofile;
submitted=false;

  constructor(
    private FormBuilder: FormBuilder ) {
      this.userprofile=this.FormBuilder.group({
        FirstName :['', Validators.required],    // this field is required 
        LastName : ['', Validators.required],
        Email: [null, Validators.compose([
          Validators.email,
          Validators.required])
       ],
       Password:[ null, Validators.compose([
        Validators.required,
        Validators.minLength(8)])],
        Address:['',Validators.required],
        Age: [null,Validators.required],
      });
     
     }
     get f() { return this.userprofile.controls; }
     onSubmit() {
      this.submitted=true;
     if(this.userprofile.invalid)
     {
       alert("invalid");
       console.log(this.userprofile.value)
     }
      
        
      
    alert("sucess");
    console.log(this.userprofile.value);
      
    }
  ngOnInit() {
  }

}
