import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenInterceptor} from '././TokenInterceptor'
import { Route } from '@angular/compiler/src/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  observeddata : any
  url =`/api/movies`
  categoryFormData: any;
  constructor(private http: HttpClient , private routes: Router) { }
  postloginDetails(email, password){
  
    const teams$ = this.http.post('http://localhost:3000/signup',{ "name" : email,"password" : password})
    .subscribe((data: any)=> {
      localStorage.setItem('accessToken', data.accessToken);
      });
    }
  postlogin(email, password){

    const teams$ = this.http.post('/api/login', { "name" : email,"password" : password}).subscribe((data: any)=> {
      localStorage.setItem("accessToken", data.accessToken);
      if(data!= null){
        this.routes.navigate(['/dashboard'])
        console.warn("yes")
      }
     
      });
  }
  viewdata(){
      const teams$ = this.http.get(this.url)
      return teams$;
  
  }

  getBook(): Observable<any>{
    const url1 = `/api/books`;
    return this.http.get<any>(url1); 
  }

  getCatogery(): Observable<any>{
    const url1 = `/api/catogries`;
    return this.http.get<any>(url1); 
  }


  getCat(): Observable<any>{
    const url2 = `/api/books?_expand=catogrie`;
    return this.http.get<any>(url2); 
  }
  getBookDetail(x): Observable<any>{
    const url3 = `/api/books/${x}`;
    return this.http.get<any>(url3); 
  }

  getCatDetail(x): Observable<any>{
    const url4 = `/api/books/${x}?_expand=catogrie`;
    return this.http.get<any>(url4); 
  }

  updateBook(obj, x): Observable<any>{
    const url = `/api/books/${x}`;
    return this.http.put<any>( url, obj);
  }

  addBook(obj): Observable<any> {
    return this.http.post<any>('/api/books', obj);
  }

  deleteTeams(x): Observable<any>{
    const url = `/api/books/${x}`;
    return this.http.delete<any>( url);
  }
    
  postbookcategories(form){

      const urltopostcateories$ = this.http.post('/api/catogries', 
      {
        "title": form.value.bookname,
        "description" : form.value.bookdescription
      }).
      subscribe((data: any)=> {
      console.log(data)});
      const urlget$ = this.http.get('/api/catogries').subscribe((data: any)=> {
         console.log('_____________<<<<<<<<<<<<',data)});
  }

  Viewdatacategories(){
   const Formdata$ =this.http.get('/api/catogries')
    return Formdata$
   }
   retrivedata(id){
    const data$ =this.http.get(`/api/books?catogriesId=${id}`);
    return data$;
   }
}
   

  