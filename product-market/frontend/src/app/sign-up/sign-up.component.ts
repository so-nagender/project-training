import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProductcatchService } from '../productcatch.service';
import { Router } from '@angular/router';
import { error } from 'protractor';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupform: FormGroup;
  error: any;

  constructor(
    private fb: FormBuilder,
    private serve: ProductcatchService,
    private router: Router,
    private cookieService: CookieService
  ) {}
  get f() {
    return this.signupform.controls;
  }

  ngOnInit() {
    this.signupform = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8),Validators.pattern(/\d/)]]
    });
  }

  onSubmit() {
    
    if (this.signupform.invalid) {
      return;
    } else {
      const username = this.signupform.controls.username.value;
      const pasword = this.signupform.controls.password.value;
      const obj = { name: username, password: pasword };
      this.serve.signUp(obj).subscribe(
        res => {
          localStorage.setItem('accessToken', res.accessToken);
          this.cookieService.set('username',username);
          this.router.navigate(['/welcomescreen']);
        },
        error => {
          this.error = error;
        }
      );
    }
  }
  onClose() {
    this.router.navigate(['/home']);
  }
}
