import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  checkoutForm: FormGroup;  
  error: string;
  loading: boolean;
  msg: string;
  isvalidvalue= true;
  cookieValue = 'UNKNOWN';

  constructor(private router: Router, private formBuilder: FormBuilder, private myservice: ApiserviceService, private cookieService: CookieService) {
    this.checkoutForm = this.formBuilder.group({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('', Validators.required),
    })
  };
  ngOnInit() {
    this.checkLogIn()
  }
  get f() {
    return this.checkoutForm.controls;
  }
  onLogin() {
    this.error='';
    this.isvalidvalue = true;    
    const email = this.checkoutForm.controls.email.value;
    const password = this.checkoutForm.controls.password.value;
    const obj = { "name": email, "password": password }
    if (this.checkoutForm.invalid || email.empty || password.empty ) {
      this.isvalidvalue = false;  
    } else {
      // if Form is valid then it will post the data into the JSON server...
      this.myservice.lognIn(obj).subscribe(res => {
        localStorage.setItem("accessToken", res.accessToken); 
        this.cookieService.set( 'Test', email);
        this.cookieValue = this.cookieService.get('Test');
        this.router.navigate(['/home']);
      },
        error => {
          this.error = error;
          this.loading = false;
        }
      );
    }
  }
  checkLogIn() {
    if(localStorage.getItem("accessToken")){
      this.router.navigate(['home']);
    } else {
      this.router.navigate(['/']);
    }
  }
}
