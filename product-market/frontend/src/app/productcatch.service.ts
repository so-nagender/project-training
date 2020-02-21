import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductcatchService {

  constructor(private http : HttpClient) { }

  getData(): Observable<any> {
    return this.http.get("/api/product-category")
  }

  signUp(obj): Observable<any> {
    return this.http.post<any>('/api/signup', obj);
  }

  logIn(obj): Observable<any> {
    return this.http.post<any>('/api/login', obj);
  }
  deleteData(x: number): Observable<any> {
    const url = `/api/product-category/${x}`;
    return this.http.delete(url);
  }

}
