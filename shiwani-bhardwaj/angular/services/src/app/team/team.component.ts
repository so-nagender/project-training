import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../movieservice.service';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { dependenciesFromGlobalMetadata } from '@angular/compiler/src/render3/r3_factory';



@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  data: any;
  myData:any;
  obj : any;
  obj1:any;

  constructor(private movieservice : MovieserviceService,private fb :FormBuilder) { }

  myform = this.fb.group({
    first_name : [''],
    last_name : [''],
    address :[''],
    user_id :[''],

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
    let a = this.myform.controls.user_id.value;
    this.obj = {"name" : x ,"coach" : y,"address" : z} 
    this.movieservice.setValue(this.obj).subscribe();
    this.movieservice.teams().subscribe((res:any)=> {
      this.myData= res;
    });
   
   
  }
  data_del()
  {
  
    console.log("data deleted_<<<<<<<  ??????//")
    let a = this.myform.value.user_id;
    console.log(a);
    this.obj1 = {"user_id":a} ;
    this.movieservice.delete(this.obj1.user_id).subscribe();
    this.movieservice.teams().subscribe((res:any)=> {
      this.myData= res;
  });
  
};
}

​



  

 

 