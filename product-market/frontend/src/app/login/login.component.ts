import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductcatchService } from '../productcatch.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  error: any;
customerName : any  
submitted = false;
 constructor(
    private fb: FormBuilder,
    private serve: ProductcatchService,
    private router: Router,
    private cookieService: CookieService
  ) {}
  get f() {
    return this.loginform.controls;
  }

  ngOnInit() {
    this.loginform = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8),Validators.pattern(/\d/)]]
    });
  }
  onSubmit() {
    if (this.loginform.invalid) {
      return;
    } else {
      const username = this.loginform.controls.username.value;
      const pasword = this.loginform.controls.password.value;
      const obj = { name: username, password: pasword };
      this.serve.logIn(obj).subscribe(
        res => {
          if (res.accessToken) {
            localStorage.setItem('accessToken', res.accessToken);
            this.cookieService.set('username',username)
            this.router.navigate(['welcomescreen']);
          }
        },
        error => {
          this.error = error;
        }
      );
    }
    this.submitted = true;
  }
  onClose() {
    this.router.navigate(['/home']);
  }
}
