import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {
  cookieValue = 'UNKNOWN';
  error='';
  form = new FormGroup({
    fname: new FormControl('',[Validators.required,Validators.pattern('^[-a-zA-Z\s]+([-a-zA-Z]+)*$')]),
    lname: new FormControl('',[Validators.required,Validators.pattern('^[-a-zA-Z\s]+([-a-zA-Z]+)*$')]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
    password2: new FormControl('',[Validators.required, Validators.minLength(6)])
  })
  validerr: string;

  constructor(private api: ApiService, private routes: Router, private cookieService: CookieService) { }
 

  ngOnInit() {
    this.checkcredentials();
  }

  onSubmit() { 
    if (this.form.value.password == this.form.value.password2){
      if(this.form.valid){
      const password = this.form.value.password;
      this.api.postloginDetails(this.form.value.email,password).subscribe((data: any)=> 
      {
        localStorage.setItem('accessToken', data.accessToken);
        this.cookieService.set( 'user', this.form.value.email );
        this.cookieValue = this.cookieService.get('user');
        if(data!= null){
          this.routes.navigate(['/dashboard']);
        }
      }, 
      error => {
          this.api.handleError(error);
          this.api.cutomerror.subscribe(res =>{Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: res
          });
          this.validerr = res})
        });     
      }
    else{
    this.error='All Field Is Required'
    }
  }
  else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "pass doesnt match"
    })
  }
}

checkcredentials(){
  if(localStorage.getItem('accessToken')){
    this.routes.navigate(['/dashboard'])
  }
}
  
}
