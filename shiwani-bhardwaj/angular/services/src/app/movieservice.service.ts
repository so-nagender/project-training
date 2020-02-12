import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {
 user_id:any;
  constructor(private https:HttpClient) { }
 

  teams (): Observable<any> {
    return this.https.get<any>('/api/teams')
  }

  setValue (obj): Observable<any> {
    return this.https.post<any>('/api/teams',obj)
  }
  delete (user_id): Observable<any> {
    console.log("user_id.toString()>>>>>>>>>>>", parseInt(user_id));
 return this.https.delete<any>("/api/teams/" + parseInt(user_id))
  }
}