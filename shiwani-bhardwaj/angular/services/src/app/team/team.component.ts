import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../movieservice.service';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  
  data: any;
  myData:any;
  obj : any;

  constructor(private movieservice : MovieserviceService,private fb :FormBuilder) { }

  myform = this.fb.group({
    first_name : [''],
    last_name : [''],
    address :['']
  })

  ngOnInit() {
     this.movieservice.teams().subscribe((res:any)=> {
     this.myData= res;
    });
  }
  onSubmit(){
    let x = this.myform.controls.first_name.value;
    let y =this.myform.controls.last_name.value;
    let z =this.myform.controls.address.value;
    this.obj = {"name" : x ,"coach" : y,"address" : z} 
    this.movieservice.setValue(this.obj).subscribe();
    this.movieservice.teams().subscribe((res:any)=> {
      this.myData= res;
    });
  }
};

​



  

 

 