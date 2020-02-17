import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { MoviesService } from './movies.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(request, next) {
    console.log('abc');
    const tokenizedreq = request.clone({
      setHeaders: {
        Authorization: 'Bearer xx.yy.zz'
      }
    });
    return next.handle(tokenizedreq);
  }
}
