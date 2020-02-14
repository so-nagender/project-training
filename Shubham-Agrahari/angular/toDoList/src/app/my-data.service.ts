import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//  Employee={
  
//     "id": 1,
//     "name": "FC Barcelona",
//     "coach": "Ernesto Valverde",
//     "description": "The best football team in the world!"
  
// }


@Injectable({
  providedIn: 'root'
})
export class MyDataService {
  id:any;
  myFormData = new FormGroup(
    {
      name : new FormControl('',Validators.required),
      id : new FormControl('',Validators.required),
      coach : new FormControl('',Validators.required),
      description : new FormControl('',Validators.required)
      
    } 
  )
  url1=`/api/team/${this.myFormData.value.id}`

  teams$: Observable<any> = this.http.get('/api/teams');  
  constructor(private http: HttpClient) {}
  public data() {
    return this.teams$
  }

// delete(obj){
//   console.log("xxxxxxxxxxxxxxxxxxxxxxxxx",obj)
//   this.http.delete(this.url1).toPromise().then((data:any)=>{
//     console.log("__________________>>>>>>>>>>>>>>>>>",this.url1);  
//     console.log("Delete is workinggvhjnfgthftg");    
//    });
//  }
}
