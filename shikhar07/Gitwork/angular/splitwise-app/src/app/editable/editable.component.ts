import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

@Component
({
  selector: 'app-editable',
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.css']
})
export class EditableComponent implements OnInit 
{
  id;
  dataa;
  update= false;
  movienm;
  director;
  producer;
  desc;
  review;
  obj;

  constructor(private activatedRoute: ActivatedRoute, private movies : MoviesService,private checkout: FormBuilder) 
  {
    this.id= (this.activatedRoute.snapshot.params.id);
  }
   myform = this.checkout.group
   ({
    firstName : [''],
    lastName : [''],
    email : [''],
    Address: [''],
    Age: ['']
  })
  ngOnInit() 
  {
    this.getDataa();
  }
  getDataa()
  {
    this.movies.getdataId(this.id).subscribe((res) =>{
      console.log(res);
      this.dataa = res;
      })
  }
  updateDataa()
  {
    this.update= true;
    this.movienm= this.myform.controls.firstName.value;
    this.director= this.myform.controls.lastName.value;
    this.producer= this.myform.controls.email.value;
    this.desc= this.myform.controls.Address.value;
    this.review= this.myform.controls.Age.value;
    this.obj= {"name": this.movienm, "Director": this.director, "Producer": this.producer, "Description": this.desc, "Review": this.review};
    this.movies.updateData(this.id, this.obj).subscribe();
    this.getDataa();
  }

}
