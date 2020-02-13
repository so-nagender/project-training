import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MoviesService 
{

constructor(private http: HttpClient ) { }

getdataId(id) : Observable<any>{
  const urls = `/api/teams/${id}`;
  return this.http.get(urls)
  .pipe(catchError(this.handleError));
}
getData(): Observable<any>{
  return this.http.get('/api/teams');
}
// !----------------------------
//Get Method //Promise     
// getData(): Promise<any>{
//   const promise= this.http.get('/api/teams') 
//   return promise
//   .toPromise()
// .pipe(catchError(this.handleError));
// !---------------------------------

//Error Handling
private handleError(errorResponse: HttpErrorResponse) {
  if(errorResponse.error instanceof ErrorEvent){
    console.log('Client side error', errorResponse.error.message)
  }
  else{
    console.log('Server side error', errorResponse)
  }
  return Observable.throw('There is a problem');
}

//Post Method
postData(object): Observable<any>{
  return this.http.post('/api/teams', object )
  // .pipe(catchError(this.handleError));
}
deleteData(id): Observable<any>{
  const del= `/api/teams/${id}`;
  return this.http.delete(del)
}
getOneMovie(id): Observable<any>{
  const uri = `/api/teams/${id}`;
  return this.http.get(uri)
}
// updateData(id, data){
//   const ur = `/api/teams/${id}/${data}`;
//   return this.http.put(ur)
// }

Interceptors
getToken(){
  return localStorage.getItem('token')
}  
}
