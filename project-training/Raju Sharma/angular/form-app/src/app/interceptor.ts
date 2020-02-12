import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { MyserviceService } from './myservice.service';
import { Observable } from 'rxjs';
@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // return next.handle(request);
    request = request.clone({
      setHeaders: {
        Authorization: "hagsjkvh"
      }
    });
    //console.log(request,next);
    return next.handle(request);
  }
}