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

//Get Method     
getData(): Observable<any>{
  return this.http.get('/api/teams')
  .pipe(catchError(this.handleError));
}
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
  .pipe(catchError(this.handleError));
}
//Interceptors
// getToken(){
//   return localStorage.getItem('token')
// }  
}
