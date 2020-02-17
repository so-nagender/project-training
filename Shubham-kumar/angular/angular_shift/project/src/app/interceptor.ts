import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap, catchError } from "rxjs/operators";

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpResponse
} from '@angular/common/http';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders().set("access-token", "xxxxxxxxxxxxxxxxtoken");
    const requestnew = request.clone( { headers: headers});
    return next.handle(requestnew).pipe(
        tap(evt => {
            if (evt instanceof HttpResponse) {
	             
	            console.log(" all looks good");
	            console.log(evt.body);
	          }

        })
);;
  }
}