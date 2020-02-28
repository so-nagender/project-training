import { Injectable } from '@angular/core';
import { ApiService} from './api.service'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';



@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  message: any;
  constructor(public auth: ApiService, private routes : Router, private api: ApiService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
  
      }
    });
    
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
       
        if (event instanceof HttpResponse) {
          console.log(event.status)
          if(event.status === 200 || event.status === 201)
          {
           
            console.log("inerceptor success>>>>>>>>>>>", event);
            this.api.currentMessage.subscribe(message=> this.message= message)
            this.api.newMessage()
            return event;
          }
         else
         console.log("11111111",HttpErrorResponse)
          return event.body;

        }
      })
    );
  }
}