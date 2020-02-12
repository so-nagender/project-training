import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServicesService {

  constructor(private http: HttpClient) {}

  todayDate() {
    let ndate = new Date();
    return ndate;
  }

  movies(){
    let list = [{id: 1, name: 'titanic'},
      {id: 2, name: 'deja-vu'},
      {id: 3, name: 'avatar'},
      {id: 4, name: '1917'},
      {id: 5, name: 'joker'},
      {id: 6, name: 'avengers: endgame'},
      {id: 7, name: 'deadpool'},
      {id: 8, name: 'aquaman'}
    ];
    return list;
  }
  getTeams(): Observable<any>{
    return this.http.get('/api/teams');
  }

  setTeams (obj): Observable<any> {
    return this.http.post<any>('/api/teams',obj)
  }

  updateTeams (obj): Observable<any> {
    const url = `/api/teams/`;
    return this.http.put<any>( url, obj);
  }
}
