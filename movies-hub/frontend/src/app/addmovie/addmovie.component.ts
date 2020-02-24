import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {
  
  public value: string;
  checkoutForm: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder, private myservice: ApiserviceService, private activatedRoute: ActivatedRoute) {
    this.checkoutForm = this.formBuilder.group({
      Name: new FormControl (''),
   });
  }

  ngOnInit() {
  }
 

}
