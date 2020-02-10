import { Injectable } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }
  todayDate() {
    let ndate = new Date();
    return ndate;
  }
  movieList(): object {
    let list = [{id: 1, name: 'titanic', dis:"Romantic"}, {id: 2, name: 'deja-vu', dis:"Drama"}, {id: 3, name: 'avatar', dis:"Sci-fi"}, {id: 4, name: 'Avenger', dis:"Sci-fi"}, {id: 5, name: 'Fast and Furious', dis:"Action"} ];
    // for(var index in list) { 
    // console.log(list[index]); 
    // }
    list.push()
    return list;
  }
  // toList(){
  //   let arr = {}
  //   arr.push()
  // }
}
