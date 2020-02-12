import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {
  constructor(private https:HttpClient) { }

  teams (): Observable<any> {
    return this.https.get<any>('/api/teams')
  }

  setValue (obj): Observable<any> {
    return this.https.post<any>('/api/teams',obj)
  }
}