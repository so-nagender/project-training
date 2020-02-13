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
    return this.https.get<any>("/api/teams")
  }

  setValue (obj): Observable<any> {
    return this.https.post<any>('/api/teams',obj)
  }
  delete (id): Observable<any> {
 return this.https.delete<any>(`/api/teams/${(id)}`)
  }
  
   getdataId(id) : Observable<any>{
     let url = `/api/teams/${id}`;
    return this.https.get( url );
  }
  edit(obj:any, id) : Observable<any>{
   let url = `/api/teams/${id}`;
   return this.https.put<any>( url,obj );
 
  
 }
 value_delete(id): Observable<any>{
  let url = `/api/teams/${id}`;
 return this.https.get( url );
}

}