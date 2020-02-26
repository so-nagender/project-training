import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductcatchService {
  constructor(private http: HttpClient) {}

  private subject = new Subject();

  private subjectforId = new Subject();

  private subjectofcart = new Subject();

  getData(): Observable<any> {
    return this.http.get('/api/product-category');
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
  postValue(obj): Observable<any> {
    return this.http.post<any>('/api/product-category', obj);
  }

  sendMessage(message: any) {
    this.subject.next(message);
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  getItems(x: number): Observable<any> {
    const url = `/api/product-items?categoryId=${x}`;
    return this.http.get(url);
  }
  deleteItem(x: number): Observable<any> {
    const url = `/api/product-items/${x}`;
    return this.http.delete(url);
  }

  getnewItem(): Observable<any> {
    return this.subjectforId.asObservable();
  }

  sendnewItem() {
    this.subjectforId.next();
  }

  postItem(obj): Observable<any> {
    return this.http.post<any>('/api/product-items', obj);
  }

  getCart(): Observable<any> {
    return this.http.get('/api/product-cart');
  }

  addCart(obj: any) {
    return this.http.post<any>('/api/product-cart', obj);
  }

  deleteCart(x: number): Observable<any> {
    const url = `/api/product-cart/${x}`;
    return this.http.delete(url);
  }

  setnewsubCart() {
    this.subjectofcart.next();
  }

  getnewsubCart(): Observable<any> {
    return this.subjectofcart.asObservable();
  }

  getParticularItem(x: number): Observable<any> {
    const url = `/api/product-items/${x}`;
    return this.http.get(url);
  }

  updateparticularItem(x, obj): Observable<any> {
    const url = `/api/product-items/${x}`;
    return this.http.put<any>(url, obj);
  }
}
