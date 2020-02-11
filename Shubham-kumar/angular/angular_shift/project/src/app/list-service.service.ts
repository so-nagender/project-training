import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {
  teams$: Observable<any> = this.http.get('http://localhost:4200/api/teams');
  
  constructor( private http: HttpClient) { }
  // Date() {
  //   let ndate = new Date();
  //   return ndate;
  // }


  MovieList() {
    
    return this.teams$
    

  
  }
}
