import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }
  private subject = new Subject();
  private subjecttwo = new Subject();
  getMovies(): Observable<any> {
    return this.http.get('api/movies?_expand=cat')
  }
  getMoviesByCatg(id): Observable<any> {
    const add = `api/cats/${id}?_embed=movies`
    return this.http.get(add);
    // api/movies?catId=${id}
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
  deleteCat(id) {
    const add = `/api/cats/${id}`;
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
  postCat(obj): Observable<any> {
    return this.http.post<any>('/api/cats',obj)
  }

  // Subjects Starts
  setData(msg: any) {
    this.subject.next(msg);
  }
  getData(): Observable<any> {
    return this.subject.asObservable();
  }
  setDataT() {
    this.subjecttwo.next();
  }
  getDataT(): Observable<any> {
    return this.subjecttwo.asObservable();
  }
  // Subjects End
  
  getCatById(id): Observable<any> {
    return this.http.get(`/api/cats/${id}`);
  }
  updateCat(id, obj) {
    const cat = `/api/cats/${id}`;
    return this.http.put(cat, obj)
  }
  getWatchList(): Observable<any> {
    const url = `/api/watchlists`
    return this.http.get(url)
  }
  setWatchlist(obj): Observable<any> {
    const url = `/api/watchlists`;
    return this.http.post<any>(url,obj)
  }
  upDateWL(id,obj): Observable<any> {
    const url = `/api/watchlists/${id}`;
    return this.http.post<any>(url, obj);
  }
  getUser(user): Observable<any> {
    const url = `/api/watchlists?${user}`;
    return this.http.get(url);
  }

}
