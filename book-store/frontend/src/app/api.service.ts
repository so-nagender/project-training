import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenInterceptor} from '././TokenInterceptor'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  postloginDetails(email, password){
  
    const teams$ = this.http.post('http://localhost:3000/signup',{ "name" : email,"password" : password})
    .subscribe((data: any)=> {
       console.log('dsdsresponse', data.accessToken);
      });
    }
  getbookdetails(email, password){
    const url =`http://localhost:3000/moviessignin?name='+${email}+'password='+${password}'`
    const teams$ = this.http.get(url).subscribe(data => { console.log(data)});
    }
}
