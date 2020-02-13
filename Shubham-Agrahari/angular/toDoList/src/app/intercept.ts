import { Injectable } from '@angular/core';
import {tap} from 'rxjs/operators'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpResponse
} from '@angular/common/http';

import { Observable, fromEventPattern } from 'rxjs';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders().set("access-token", "dsfdsfds");
    const requestnew = request.clone( { headers: headers});
    // console.log('hi@#$%^&*()(______________>>>>>>>')
    return next.handle(requestnew).pipe(
        tap(evt => {
            if (evt instanceof HttpResponse) {
	             
	            // console.log(" all looks good");
	            // // http response status code
	            // console.log(evt);
	          }
})
    )}
}