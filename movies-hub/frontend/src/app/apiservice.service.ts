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
  updateMovie(id, obj): Observable<any> {
    const add = `/api/movies/${id}`;
    return this.http.put<any>(add, obj);
  }
  deleteMovie(id) {
    const add = `/api/movies/${id}`;
    return this.http.delete(add);
  }
  getSingleElementById(id): Observable<any> {
    const address = `/api/movies/${id}`;
    return this.http.get(address);
  }
}
