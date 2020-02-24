import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  checkoutForm: FormGroup;
  save = false;
  movienm;
  director;
  producer;
  desc;
  review;
  object;
  constructor(private formBuilder: FormBuilder, private movies: MoviesService) {
    this.checkoutForm = this.formBuilder.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      Address: new FormControl('', Validators.required),
      Age: new FormControl('', [Validators.required, Validators.min(1)])
    });
  }
  onSubmit(customerData) {
    // Process checkout data here
    this.save = true;
    this.movienm = this.checkoutForm.controls.firstName.value;
    this.director = this.checkoutForm.controls.lastName.value;
    this.producer = this.checkoutForm.controls.email.value;
    this.desc = this.checkoutForm.controls.Address.value;
    this.review = this.checkoutForm.controls.Age.value;
    this.object = {
      name: this.movienm,
      Director: this.director,
      Producer: this.producer,
      Description: this.desc,
      Review: this.review
    };
    this.movies.postData(this.object).subscribe((error: any) => console.log(error));
    this.movies.getData();
    if (this.checkoutForm.invalid) {
      alert('Aish Karooo !!!!');
    }
    console.warn('Form Details are', customerData);
  }
  ngOnInit() {}
}
