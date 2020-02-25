import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }
  getMovies(): Observable<any> {
    return this.http.get('api/movies?_expand=cat')
  }
  getMoviesByCatg(id): Observable<any> {
    const add = `api/cats/${id}?_embed=movies`
    return this.http.get(add);
  }
  signupData(obj): Observable<any> {
    return this.http.post<any>('/api/signup', obj);
  }
  lognIn(obj) {
    return this.http.post<any>('api/login', obj);
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
    const address = `/api/movies/${id}?_expand=cat`;
    return this.http.get(address);
  }
  getCat(): Observable<any> {
    return this.http.get('/api/cats');
  }
  updateData(id, obj) {
    const ur = `/api/movies/${id}`;
    return this.http.put(ur, obj)
  }
  update(id, obj): Observable<any> {
    const add = `/api/movies/${id}`;
    return this.http.put<any>(add, obj);
  }
  postData(obj): Observable<any> {
    return this.http.post<any>('/api/movies',obj)
  }
}
