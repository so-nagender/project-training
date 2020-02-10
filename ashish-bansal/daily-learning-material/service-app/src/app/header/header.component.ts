import { Component, OnInit } from '@angular/core';
import {FormsModule,ReactiveFormsModule,FormBuilder,FormGroup,Validators} from '@angular/forms'
import { TimeServiceService } from './../time-service.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  todayTime;
  myList;
  a;
  b;
  
  

  constructor(private newtime : TimeServiceService,private newForm : FormBuilder) { }
  myform = this.newForm.group({
    id : [''],
    movies : [''],
  })

  ngOnInit() {
    this.todayTime = this.newtime.todayDate();
    this.myList = this.newtime.moviesList();
    
  }
  
  onSubmit(){
    console.log(this.myform.controls)
    this.a = this.myform.controls.id.value
    this.b = this.myform.controls.movies.value
    this.newtime.setValue(this.a,this.b)
    console.log(this.a,this.b)
  }

  

}
