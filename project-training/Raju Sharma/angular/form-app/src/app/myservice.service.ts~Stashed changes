import { Injectable } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private httpClient: HttpClient) { }
  todayDate() {
    let ndate = new Date();
    return ndate;
  }
  movieList(): any {
    let list = [
      {id: 1, name: 'titanic', dis:"Romantic"}, 
      {id: 2, name: 'deja-vu', dis:"Drama"}, 
      {id: 3, name: 'avatar', dis:"Sci-fi"}, 
      {id: 4, name: 'Avenger', dis:"Sci-fi"}, 
      {id: 5, name: 'Fast and Furious', dis:"Action"} 
    ];
    return list;
  }
  teams(): any {
    return this.httpClient.get('api/teams');
  }
  getUsers(): Observable<any> {
    return this.httpClient.get('/api/teams');
  }
  postData(obj): Observable<any> {
    return this.httpClient.post<any>('/api/teams',obj);
  }
}
