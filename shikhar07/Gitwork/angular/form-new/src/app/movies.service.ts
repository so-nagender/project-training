import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService 
{
 
 constructor() { }

  movielist(): any[]
    {
      var arr = [
        { id: '1', name: 'Titanic' }, 
        { id: '2', name: 'Titanic again' },
        { id: '3', name: 'Titanic again 2.0' },
      ];
      return arr;
    }

}
