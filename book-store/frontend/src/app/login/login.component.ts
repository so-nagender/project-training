import { Component, OnInit, RootRenderer } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ApiService} from '.././api.service'

import { HttpClient } from '@angular/common/http';
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

 
  constructor(private api: ApiService , private routes : Router) { 
    
  }

  ngOnInit() {

    this.checkcredentials();

    
    
  }
  onSubmit(form) {
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
        });this.validerr = res})
      });
      
   
    
   
    // this.api.disable()/////////  
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
