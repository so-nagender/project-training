import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TokenInterceptor} from '././TokenInterceptor'
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { Subject, Observable, throwError } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  observeddata : any
  url =`/api/movies`
  categoryFormData: any;
  charterid: any;
  private message = new BehaviorSubject<any>(false)
  currentMessage = this.message
  cutomerror= new BehaviorSubject<string>('default');
  userdata = new BehaviorSubject<any>('default')



  constructor(private http: HttpClient , private routes: Router) { }
  insertuserdata(value)
  {
    return this.userdata.next(value)
  }
  changemessage(message:boolean){
    this.message.next(message)
  }
  changeerror(err){
    this.cutomerror.next(err)
  }

  postloginDetails(email, password){
  
    return  this.http.post('http://localhost:3000/signup',{ "name" : email,"password" : password})
    
  
  }
  postlogin(email, password){

    return  this.http.post('/api/login', { "name" : email,"password" : password})
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
  getCatDetailEdit(x): Observable<any>{
    const url1 = `/api/catogries/${x}`;
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

  updateCat(obj, x): Observable<any>{
    const url = `/api/catogries/${x}`;
    return this.http.put<any>( url, obj);
  }
  updateBook(obj, x): Observable<any>{
    const url = `/api/books/${x}`;
    return this.http.put<any>( url, obj);
  }

  updateCart(obj, x): Observable<any>{
    const url = `/api/cart/${x}`;
    return this.http.put<any>( url, obj);
  }

  addBook(obj): Observable<any> {
    return this.http.post<any>('/api/books', obj);
  }

  // addBookCart(obj, x): Observable<any> {
  //   return this.http.post<any>('/api/cart/${x}', obj);
  // }

  addcart(obj): Observable<any> {
    return this.http.post<any>('/api/cart', obj);
  }

  getCart(): Observable<any>{
    const url = `/api/cart`;
    return this.http.get<any>(url); 
  }

  deleteTeams(x): Observable<any>{
    const url = `/api/books/${x}`;
    return this.http.delete<any>( url);
  }
  
  deleteCat(x): Observable<any>{
    const url = `/api/catogries/${x}`;
    return this.http.delete<any>( url);
  }

  deleteCatBook(x): Observable<any>{
    const url = `/api/books?catogrieId=${x}`;
    return this.http.delete<any>( url);
  }

  getCatBook(x): Observable<any>{
    const url = `/api/books?catogrieId=${x}`;
    return this.http.get<any>( url);
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
  sendata(id){
    console.log('here --------------->>>>>>>>>>',id)
    this.routes.navigate(['/contactlist'])
    this.charterid= id
    return id;
  }
  charid(){
    return  this.charterid
    
  }
  newMessage(){
    this.changemessage(true)
  }

  Viewdatacategories(){
   const Formdata$ =this.http.get('/api/catogries')
    return Formdata$
   }
   retrivedata(id){
    
    const data$ =this.http.get(`/api/books?catogrieId=${id}`);


    return data$;

   }
   handleError(error: HttpErrorResponse){
   
    if(error.status){
    this.changeerror(error.message)
    return throwError(error)
    }
   else
   return throwError(error)
  }

  
  
}
   

  