import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//  Employee={
  
//     "id": 1,
//     "name": "FC Barcelona",
//     "coach": "Ernesto Valverde",
//     "description": "The best football team in the world!"
  
// }


@Injectable({
  providedIn: 'root'
})
export class MyDataService {
  teams$: Observable<any> = this.http.get('/api/teams');  
  constructor(private http: HttpClient) {}
  public data() {
    return this.teams$
  }
//   save(employee: any): Observable<any> {
//     if (employee.id === null) {
      
//         return this.http.post<any>('http://localhost:3000/teams',
//             employee, {
//                 headers: new HttpHeaders({
//                     'Content-Type': 'application/json'
//                 })
//             })
// }
}

