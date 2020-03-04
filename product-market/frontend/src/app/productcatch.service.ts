import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductcatchService {
  
  constructor(private http: HttpClient) {}

  private subject = new Subject();

  private subjectHeader = new Subject();

  private subjectforId = new Subject();

  private subjectofcart = new Subject();
  private subforlength = new Subject();

  rating = 0;

  getData(): Observable<any> {
    return this.http.get('/api/cats');
  }

  signUp(obj): Observable<any> {
    return this.http.post<any>('/api/signup', obj);
  }

  logIn(obj): Observable<any> {
    return this.http.post<any>('/api/login', obj);
  }
  deleteData(x: number): Observable<any> {
    const url = `/api/cats/${x}`;
    return this.http.delete(url);
  }
  postValue(obj): Observable<any> {
    return this.http.post<any>('/api/cats', obj);
  }

  sendMessage(message: any) {
    this.subject.next(message);
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  getItems(x: number): Observable<any> {
    const url = `/api/product-items?catId=${x}`;
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

  getCart(text): Observable<any> {
    const url =  `/api/product-cart?username=${text}`
    return this.http.get(url);
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

  getidData(): Observable<any> {
    return this.http.get('/api/cats?_embed=product-items');
  }

  setcartlength() {
    this.subforlength.next();
  }

  getcartlength(): Observable<any> {
    return this.subforlength.asObservable();
  }
  getparticularCat(x: number): Observable<any> {
    const url = `/api/cats/${x}`;
    return this.http.get(url);
  }

  updateproductCart(x,obj): Observable<any>{
    const url = `/api/product-cart/${x}`;
    return this.http.put<any>(url, obj);
  }


  
}
