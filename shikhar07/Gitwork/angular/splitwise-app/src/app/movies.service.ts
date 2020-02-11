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
arr1;
    
getData(): Observable<any>{
  return this.http.get('/api/teams')
  .pipe(catchError(this.handleError));
}
private handleError(errorResponse: HttpErrorResponse) {
  if(errorResponse.error instanceof ErrorEvent){
    console.log('Client side error', errorResponse.error.message)
  }
  else{
    console.log('Server side error', errorResponse)
  }
  return Observable.throw('There is a problem');
}  

}
