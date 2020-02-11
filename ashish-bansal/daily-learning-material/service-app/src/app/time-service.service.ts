import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeServiceService {

  constructor(private https: HttpClient ) {}
  // arr = [{id: 1, name: 'titanic'}, {id: 2, name: 'deja-vu'}, {id: 3, name: 'avatar'},{id: 4,name : 'parasite'},{id: 5,name :'birds of prey'}]

  todayDate() {
    let ndate = new Date();
    return ndate;
  }

  // moviesList(){
  //   return this.arr
  // }

  // setValue(a,b){
  //  this.arr.push({"id" : a ,"name" : b})
  // }
  setValue (obj): Observable<any> {
    return this.https.post<any>('/api/posts',obj)
  }

  getData(): Observable<any>{
    return this.https.get('/api/posts')
  }
  
  deleteData(x : number): Observable<any>{
    console.log('x...........', x);
    const url = `/api/posts/${x}`;
    return this.https.delete(url)
  }
}
