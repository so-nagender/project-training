import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeServiceService {

  constructor() { }
  arr = [{id: 1, name: 'titanic'}, {id: 2, name: 'deja-vu'}, {id: 3, name: 'avatar'},{id: 4,name : 'parasite'},{id: 5,name :'birds of prey'}]

  todayDate() {
    let ndate = new Date();
    return ndate;
  }

  moviesList(){
    return this.arr
  }

  setValue(a,b){
   this.arr.push({"id" : a ,"name" : b})
  }
}
