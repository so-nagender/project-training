import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';


@Component({
  selector: 'app-editable',
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.css']
})
export class EditableComponent implements OnInit {
  id;
  dataa;

  constructor(private activatedRoute: ActivatedRoute, private movies : MoviesService,private checkout: FormBuilder) {
    this.id= (this.activatedRoute.snapshot.params.id);
   }
   myform = this.checkout.group({
    firstName : [''],
    lastName : [''],
    email : [''],
    Address: [''],
    Age: ['']
  })
  ngOnInit() {
    this.getDataa();
  }
  getDataa(){
    this.movies.getOneMovie(this.id).subscribe((res) =>{
      console.log(res);
      this.dataa = res;
      })
  }

}
