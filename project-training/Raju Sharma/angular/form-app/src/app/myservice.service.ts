import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  constructor(private httpClient: HttpClient) {}
  // Current Date Service implentation
  todayDate() {
    const cdate = new Date();
    return cdate;
  }
  // Movie list service having list and return list...
  movieList(): any {
    const movieList = [
      { id: 1, name: 'titanic', dis: 'Romantic' },
      { id: 2, name: 'deja-vu', dis: 'Drama' },
      { id: 3, name: 'avatar', dis: 'Sci-fi' },
      { id: 4, name: 'Avenger', dis: 'Sci-fi' },
      { id: 5, name: 'Fast and Furious', dis: 'Action' }
    ];
    return movieList;
  }
  // Geting team details service using API from JSON mock server
  teams(): any {
    return this.httpClient.get('api/teams');
  }
  // Getting team details service using API, Obseverable and resolver...
  getUsers(): Observable<any> {
    return this.httpClient.get('/api/teams');
  }
  // Putting Team Data into JSON server using API, having obsevrable return type
  postData(obj): Observable<any> {
    return this.httpClient.post<any>('/api/teams', obj);
  }
  // Update team details in JSON server using API and dynamic ID having Observable return type
  update(id, obj): Observable<any> {
    const add = `/api/teams/${id}`;
    return this.httpClient.put<any>(add, obj);
  }
  // Deleting teams details in the JSON SERVER...
  deletData(id) {
    const add = `/api/teams/${id}`;
    return this.httpClient.delete(add);
  }
  // Getting single element details using dynamic id from url...
  getSingleElementById(id): Observable<any> {
    const address = `/api/teams/${id}`;
    return this.httpClient.get(address);
  }
}
