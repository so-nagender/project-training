import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeServiceService {
  constructor(private https: HttpClient) {}
  id: any;
  todayDate() {
    const ndate = new Date();
    return ndate;
  }

  setValue(obj): Observable<any> {
    return this.https.post<any>('/api/posts', obj);
  }

  getData(): Observable<any> {
    return this.https.get('/api/posts');
  }

  getdataId(x): Observable<any> {
    const url = `/api/posts/${x}`;
    return this.https.get(url);
  }

  deleteData(x: number): Observable<any> {
    const url = `/api/posts/${x}`;
    return this.https.delete(url);
  }

  updateValue(x, obj): Observable<any> {
    const url = `/api/posts/${x}`;
    return this.https.put<any>(url, obj);
  }
}
