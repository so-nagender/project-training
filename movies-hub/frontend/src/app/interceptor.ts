import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
 HttpResponse,
 HttpErrorResponse
} from '@angular/common/http';
import { ApiserviceService } from '../app/apiservice.service';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(public auth: ApiserviceService, private router: Router) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    });
    return next.handle(request)
    .pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else if(error.status === 403 ) {
          errorMessage = `Error: ${error.error.message}`;
        } else if(error.status === 409) {
          errorMessage = `User Already Exits`;
          // window.alert(errorMessage);
          // this.router.navigate(['/']);
        } else {
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(errorMessage);
      })
    );
  }
}