import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  userprofile;
  submitted=false;
   constructor(
        private FormBuilder: FormBuilder ) {
          debugger;
        this.userprofile=this.FormBuilder.group({
           FirstName :['',[Validators.required]],    // this field is required 
           LastName : ['', [Validators.required]],
           email: ['',[ Validators.email,Validators.required]],
           Confirm_Password: ['',[ Validators.required, Validators.minLength(8)]],
           Password:['',[ Validators.required, Validators.minLength(8)]],
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
            { if(this.userprofile.value. Password!==this.userprofile.value. Confirm_Password)
              {
                alert("mismatched password");
                
              }
            }
             alert('sucessfully filled');
             console.log(this.userprofile.value);
  
  
            }

  ngOnInit() {
  }

}
