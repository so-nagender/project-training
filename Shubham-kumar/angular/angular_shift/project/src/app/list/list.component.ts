import { Component, OnInit } from '@angular/core';
import { ListServiceService } from '../list-service.service';
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs';
// import { ConstantPool } from '@angular/compiler';
​
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'], 
  providers : [ListServiceService]
})
export class ListComponent implements OnInit {
  data: any;
  myData:any;
  postData={
    "id": 105,
    "name": "updated",
    "coach": "updatese",
    "description": "The best football team in the world!"
  };
  id = 105
  url ="/api/teams/"
  url2="/api/teams/"+this.id;

  constructor( private list : ListServiceService, 
               private http:HttpClient ) { 

   
   
          
                }

  ngOnInit() {

    
    this.data = this.list.MovieList()
    this.data.subscribe((res:any)=> {this.myData= res});
    

    
  }

   delval (id ){
    this.http.delete(this.url2).toPromise().then(data=>{console.log(data)});
   }
   updval (id ){
    this.http.put( this.url2, this.postData ).toPromise().then(data=>{console.log(data)});
   }
   postVal(){
    this.http.post(this.url, this.postData).toPromise().then(data=>{console.log(data)});
   }
}

 // this.http.post(this.url, this.postData).toPromise().then(data=>{console.log(data)});     ---------------------->>>>>>>> post data

    
    // this.delval(this.id)
    // this.updval(this.id)
    // this.postVal()