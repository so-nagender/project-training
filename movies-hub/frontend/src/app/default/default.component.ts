import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  checkoutForm: FormGroup;
  isSubmitted: boolean = false;
  error: string;
  loading: boolean;

  constructor(private router: Router, private formBuilder: FormBuilder, private myservice: ApiserviceService, private activatedRoute: ActivatedRoute) {
    this.checkoutForm = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  };
  ngOnInit() {
  }
  get f() {
    return this.checkoutForm.controls;
  }
  onLogin() {
    this.isSubmitted = true;
    const email = this.checkoutForm.controls.email.value;
    const password = this.checkoutForm.controls.password.value;
    const obj = { "name": email, "password": password }
    if (this.checkoutForm.invalid) {
      alert('Fields is/are empty');
      return;
    } else {
      // if Form is valid then it will post the data into the JSON server...
      this.myservice.lognIn(obj).subscribe(res => {
        localStorage.setItem("accessToken", res.accessToken);
        this.router.navigate(['/home']);
      },
      error => {
        this.error = error;
        this.loading = false;
      }
      );
    }

  }
}
