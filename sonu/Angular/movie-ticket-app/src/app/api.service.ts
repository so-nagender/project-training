import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  name:string;

  constructor() { }
  display(){
    return "Sonu Kumar Sah";
  };
  print(){
    return[
      {'id':1 , 'name': 'sonu'},
      {'id':1 , 'name': 'sonu'},
      {'id':1 , 'name': 'sonu'},
      {'id':1 , 'name': 'sonu'}
    ]
  }
}
