import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { ApiserviceService } from '../app/apiservice.service';
import { Observable } from 'rxjs';
@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(public auth: ApiserviceService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    });
    return next.handle(request);
  }
}