import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenInterceptor} from '././TokenInterceptor'
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  observeddata : any
  url =`/api/movies`
  constructor(private http: HttpClient) { }
  postloginDetails(email, password){
  
    const teams$ = this.http.post('http://localhost:3000/signup',{ "name" : email,"password" : password})
    .subscribe((data: any)=> {
      localStorage.setItem('accessToken', data.accessToken);
      });
    }
  postlogin(email, password){

    const teams$ = this.http.post('/api/login', { "name" : email,"password" : password}).subscribe((data: any)=> {
      localStorage.setItem("accessToken", data.accessToken);
      
      });
    }
    viewdata(){
      const teams$ = this.http.get(this.url)
      return teams$;
  
    }
    postbookcategories(form){

      const urltopostcateories$ = this.http.post('/api/catogries-booksstore', 
      {
        "title": form.value.bookname,
        "description" : form.value.bookdescription
      }).
      subscribe((data: any)=> {
      console.log(data)});
      const urlget$ = this.http.get('/api/catogries-booksstore').subscribe((data: any)=> {
         console.log('_____________<<<<<<<<<<<<',data)});
  }
}

  