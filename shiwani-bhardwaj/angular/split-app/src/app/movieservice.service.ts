import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {

  constructor() { }
  movie() {
    let movies= [
       {id: 1, "name": 'titanic',"director":'James Cameron',year:1992},
       {id: 2, "name": 'deja-vu',"director":'James',year:1993},
       {id: 3, "name": 'avatar',"director":'James Cameron',year:1990},
       {id: 4, "name": 'ddlj',"director":'yash chopra',year:1994}];
    return movies;
  }
}
  