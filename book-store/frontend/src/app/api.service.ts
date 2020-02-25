import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenInterceptor} from '././TokenInterceptor'
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

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




  constructor(private http: HttpClient , private routes: Router) { }
  changemessage(message:boolean){
    this.message.next(message)
  }

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

  getBook(){
    const url1 = `/api/books`;
    return this.http.get(url1); 
  }

  getCat(){
    const url2 = `/api/books?_expand=catogrie`;
    return this.http.get(url2); 
  }

  deleteBook(id){
    const url3 =`/api/books/{x}`
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
  //  disablebutton(){

  //   button= false;


  //  }
   
   
  
}
   

  