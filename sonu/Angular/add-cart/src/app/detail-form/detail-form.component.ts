import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { HttpClient } from '@angular/common/http';
import { FormControl,FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.css']
})
export class DetailFormComponent implements OnInit {

  myFormData = new FormGroup(
    {
      id : new FormControl('',Validators.required),
      movieName : new FormControl('',Validators.required)
    } 
  )
  postData:any;
  url =  '/api/teams';
  url1 = `/api/teams/${this.myFormData.value.id}`;
  updateData: { 'id': number; 'movieName': string; };
  id:any;
  data: any;
 
 
  constructor(private myservice: MyserviceService,private http: HttpClient, private route:ActivatedRoute ,) { }

  ngOnInit() {
    console.log(this.route.snapshot.params.id);
    this.id=this.route.snapshot.params.id;
    // this.getData();
  }
  getData(){
    this.myservice.getOneData(this.id).subscribe(res=>{
      // this.data=res;
      // this.myFormData=this.data;
      console.log(res);
    })
  }

  onSubmit(){
    this.postData={
      'id':this.myFormData.value.id,
      'movieName':this.myFormData.value.movieName,
    }  
    this.http.post(this.url, this.postData).toPromise().then((data:any)=>{
      console.log(data);      
    });
    }

    onDelete(){        
      this.url1 = `/api/teams/${this.myFormData.value.id}`;
      console.log('this.url3==>', this.url1);
      this.http.delete(this.url1).toPromise().then((data:any)=>{
            console.log(data);  
            console.log("Delete is working");    
      });
    }

    onPut(){
      this.url1 = `/api/teams/${this.myFormData.value.id}`;
      console.log('this.url1==>', this.url1);
      this.updateData={
        'id':this.myFormData.value.id,
        'movieName':this.myFormData.value.movieName
      }
    this.http.put(this.url1,this.updateData).toPromise().then((data:any)=>{
      console.log(data);
    });
  }
  
  }