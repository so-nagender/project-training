import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }
  getUsers(): Observable<any> {
    return this.http.get('api/movies')
  }
  signupData(obj):Observable<any> {
    return this.http.post<any>('/api/signup',obj);
  }
  lognIn(obj) {
    return this.http.post<any>('api/login',obj);
  }
}
