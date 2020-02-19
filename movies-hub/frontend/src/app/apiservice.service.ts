import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }
  getUsers(): Observable<any> {
    console.log(this.http.get('/api/movies'));
    return this.http.get('api/movies')
  }
  siginUp(): Observable<any> {
    return this.http.get('/api/posts');
  }
}
