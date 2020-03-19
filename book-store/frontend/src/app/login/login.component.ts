import { Component, OnInit, RootRenderer } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { ApiService} from '.././api.service'
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form=new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)])
  })
  data: any;
  observeddata: any;
  islogin: boolean;
  message: any;
  validerr: string;
  cookieValue = 'UNKNOWN';

 
  constructor(private api: ApiService , private routes : Router, private cookieService: CookieService) { 
    
  }

  ngOnInit() {

    this.checkcredentials();
    this.cookieService.set( 'user', 'hello');
    
    
  }
  setCookie(username) {
    var d = new Date();
    d.setTime(d.getTime() + (24*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = 'user' + "=" + username + ";" + expires + ";path=/";
  }
  onSubmit(form) {
      this.setCookie(this.form.value.email)
      const apicall =this.api.postlogin(this.form.value.email, this.form.value.password).subscribe((data: any)=> {
        localStorage.setItem("accessToken", data.accessToken);
        this.api.insertuserdata(this.form.value.email);
        if(data!= null){
          this.routes.navigate(['/dashboard'])
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

    viewData()
    {
     const data=this.api.viewdata().subscribe(data => { this.observeddata = data; console.log(this.observeddata)});
    }
    checkcredentials(){
      if(localStorage.getItem('accessToken')){
      this.routes.navigate(['/dashboard'])
    }
  }
}
