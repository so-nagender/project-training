import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServicesService {
  constructor(private http: HttpClient) {}

  todayDate() {
    const ndate = new Date();
    return ndate;
  }

  getTeams(): Observable<any> {
    return this.http.get('/api/teams');
  }

  getMovie(x): Observable<any> {
    const url = `/api/teams/${x}`;
    return this.http.get(url);
  }

  setTeams(obj): Observable<any> {
    return this.http.post<any>('/api/teams', obj);
  }

  updateTeams(obj, x): Observable<any> {
    const url = `/api/teams/${x}`;
    return this.http.put<any>(url, obj);
  }

  deleteTeams(x): Observable<any> {
    const url = `/api/teams/${x}`;
    return this.http.delete<any>(url);
  }
}
