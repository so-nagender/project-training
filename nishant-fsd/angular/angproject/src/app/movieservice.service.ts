import { Injectable, OnInit } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { BannerComponent } from './banner/banner.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService  {
  list:any;
  constructor(private httpClient: HttpClient){}
  public movie() {
    this.list=[
     {id:1,name:'IronMan'},
     {id:2,name:'Avengers-Infinity War'},
     {id:3,name:'captain marvel'}
    ]
    return this.list;
  }
  public getMovies(){
    return this.httpClient.get('api/teams');
  }
  
  
}
