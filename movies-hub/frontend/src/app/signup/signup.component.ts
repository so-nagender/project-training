import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MustMatch } from '../match';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  checkoutForm: FormGroup;
  email: any;
  password: any;
  submitted: boolean = false;
  error: string;
  loading: boolean;
  cookieValue = 'UNKNOWN';
  shown: boolean;
  constructor(private router: Router, private formBuilder: FormBuilder, private myservice: ApiserviceService, private cookieService: CookieService) {
    this.shown = false;
  }

  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({
      Name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      retypepassword: new FormControl('', Validators.required)
    },
      {
        validator: MustMatch('password', 'retypepassword')
      });
  }
  get f() {
    return this.checkoutForm.controls;
  };
  onSubmit() {
    this.submitted = true;
    const name = this.checkoutForm.controls.Name.value;
    let email = this.checkoutForm.controls.email.value;
    const password = this.checkoutForm.controls.password.value;
    const obj = { "userName": name, "name": email, "password": password }
    if (this.checkoutForm.invalid) {
      alert('Fields is/are empty');
      return;
    }
    else {
      // if Form is valid then it will post the data into the JSON server...
      // const user = {"user": email, "movieId": []};
      this.myservice.signupData(obj).subscribe(res => {
        localStorage.setItem("accessToken", res.accessToken);
        this.cookieService.set('Test', email);
        // this.myservice.setWatchlist(user).subscribe();
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
  togglePassword() {
    this.shown = !this.shown;
  }
}
