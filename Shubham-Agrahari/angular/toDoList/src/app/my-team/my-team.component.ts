import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyDataService } from '../my-data.service';
import { HttpClient } from '@angular/common/http';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.css']
})
export class MyTeamComponent implements OnInit {
  
  myFormData = new FormGroup(
    {
      name : new FormControl('',Validators.required),
      id : new FormControl('',Validators.required),
      coach : new FormControl('',Validators.required),
      description : new FormControl('',Validators.required)
      
    } 

  )
 
 postData:any;
 updateData:any;
 url =  '/api/teams';
 url1: string;

  

  constructor(private myservice: MyDataService,private http: HttpClient) { }  
  ngOnInit() {
    
  }
  onSubmit(){
    console.log('onSubmit');
    this.postData={
      name:this.myFormData.value.name,
      id:this.myFormData.value.id,
      coach:this.myFormData.value.coach,
      description:this.myFormData.value.description    
      
    }
    this.http.post(this.url, this.postData).toPromise().then((data:any)=>{
        console.log(data);   
        
      });
    
      
  }
  
  
  

  // onDelete(){        
  //   this.url1 = `/api/teams/${this.myFormData.value.id}`;
  //   console.log('this.url1==>', this.url1);
  //   this.http.delete(this.url1).toPromise().then((data:any)=>{
  //         console.log(data);  
  //         console.log("Delete is working");    
  //        });
  // }

  onPut(){
    this.url1 = `/api/teams/${this.myFormData.value.id}`;
    console.log('this.url1==>', this.url1);
    this.updateData={
      'name':this.myFormData.value.name,
      'id':this.myFormData.value.id,
      'coach':this.myFormData.value.coach,
      'description':this.myFormData.value.description
    
      
    }
    this.http.put(this.url1,this.updateData).toPromise().then((data:any)=>{
        console.log(data);      
      });               
  }

}
