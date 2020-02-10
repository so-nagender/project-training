import { Injectable, OnInit } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { BannerComponent } from './banner/banner.component';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService  {
  list:any;
  movie() {
    this.list=[
     {id:1,name:'IronMan'},
     {id:2,name:'Avengers-Infinity War'},
     {id:3,name:'captain marvel'}
    ]
    return this.list;
  }
  
  
}
