import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userprofile;
  constructor(private fb : FormBuilder) { }

  myform = this.fb.group({
    first_name : [''],
    last_name : [''],
    address :['']
  })

  ngOnInit() {
  }

}
