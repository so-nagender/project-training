import {Component} from '@angular/core';
import { MyDataService } from './my-data.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {   
  postData={
    'fName': 'Shubham',
    'lName' : 'Agrahari'
  } 
  updateData={
    'fName': 'Shivani',
    'lName' : 'Agrahari'
  }

  id = 9;
  url =  '/api/teams';
  url1 = `/api/teams/${this.id}`
  id1= 19
  url2 = `/api/teams/${this.id1}`
constructor(private myservice: MyDataService,private http: HttpClient) {}
teams$
 ngOnInit(){
 this.teams$=this.myservice.data()
 this.teams$.subscribe((res)=>{
      console.log(res);
    });
    // this.http.post(this.url, this.postData).toPromise().then((data:any)=>{
    //   console.log(data);      
    // });
    this.http.delete(this.url1).toPromise().then((data:any)=>{
        console.log(data);      
      });
    this.http.put(this.url2,this.updateData).toPromise().then((data:any)=>{
      console.log(data);      
    });
  }  
}
