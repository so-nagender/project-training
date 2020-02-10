import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }
  // todayDate() {
  //   let ndate = new Date();
  //   return ndate;
  // }
  movie(){
   let list= [{id: 1, name: 'titanic'}, {id: 2, name: 'deja-vu'}, {id: 3, name: 'avatar'}];  
   return list;
  }
}
