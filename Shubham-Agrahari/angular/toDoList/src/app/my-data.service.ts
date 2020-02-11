import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {
  teams$: Observable<any> = this.http.get('/api/teams');
  constructor(private http: HttpClient) {}
  public data() {
    return this.teams$
  }
}
