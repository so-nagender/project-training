import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieserviceService } from '../movieservice.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id;
  myData;
  obj : any;
  constructor(private movieservice : MovieserviceService,private activatedRoute: ActivatedRoute,private fb :FormBuilder) {
    this.id= this.activatedRoute.snapshot.params.id;
   }  
   myform = this.fb.group({
    first_name : [''],
    last_name : [''],
    address :[''],

  })

  
  onSubmit(){
    let x = this.myform.controls.first_name.value;
    let y =this.myform.controls.last_name.value;
    let z =this.myform.controls.address.value;
    this.obj = {"name" : x ,"coach" : y,"address" : z} 
    console.log('this.obj', this.obj);
    console.log('this.id', this.id)
    this.movieservice.edit(this.obj,this.id).subscribe();
    this.movieservice.teams().subscribe((res:any)=> {
      this.myData= res;
    });
  }
   
  ngOnInit() {
    console.log(this.id);
  this.movieservice. getdataId(this.id).subscribe((res:any)=> {
    this.myData= res;
  });
  }

}
