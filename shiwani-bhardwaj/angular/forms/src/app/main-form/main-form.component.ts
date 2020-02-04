import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { RouterModule, Routes } from '@angular/router';

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
         FirstName :['',[Validators.required]],    // this field is required 
         LastName : ['', [Validators.required]],
         email: ['',[ Validators.email,Validators.required]],
         Confirm_Email: ['',[ Validators.email,Validators.required]],
         Password:['',[ Validators.required, Validators.minLength(8)]],
         Address:['',[Validators.required]],
         Age: ['',[Validators.required,Validators.min(1),Validators.max(150)]],
         });
      }
        get f() { return this.userprofile.controls; }
        onSubmit() {
        this.submitted=true;
        
        if(this.userprofile.invalid)
         {
              alert("invalid form");
            
         }
          // if(this.userprofile.value)
          { if(this.userprofile.value.email!==this.userprofile.value.Confirm_Email)
            {
              alert("mismatched");
              
            }
          }
           alert('sucessfully filled');
           console.log(this.userprofile.value);


          }
        
        ngOnInit() 
        {
        }

}
