import { Injectable } from '@angular/core';
import { tap} from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpResponse
} from '@angular/common/http';
import { Observable,fromEventPattern } from 'rxjs';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //     throw new Error("Method not implemented.");
    // }
  constructor() {}
//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     console.log("---------<<<<<<<<<<<<<  working")
//     const shiwani = new HttpHeaders().set("access-token", "shiwani");
//     const requestnew = request.clone( { headers: shiwani});
//     console.log("hello <<<<< i m <<<<< new<<<<< users")
//     return next.handle(requestnew)
// }
// }
 
intercept(request, next) {
    console.log('acess found')
    let user = request.clone({
      setHeaders: {
        Authorization: 'Bearer aa.bb.cc '
      }
    })
    console.log(user);
    return next.handle(user);
  }
}