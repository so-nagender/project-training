import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductcatchService {

  constructor(private http : HttpClient) { }

  getData(): Observable<any> {
    console.log(this.http.get('/api/movies'));
    return this.http.get('/api/movies')
  }

  signUp(obj): Observable<any> {
    return this.http.post<any>('/api/signup', obj);
  }

  logIn(obj): Observable<any> {
    return this.http.post<any>('/api/login', obj);
  }

}
