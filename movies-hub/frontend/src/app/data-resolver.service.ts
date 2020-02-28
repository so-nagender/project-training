import { Injectable } from '@angular/core';
import {  Resolve,ActivatedRouteSnapshot, RouterStateSnapshot,Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from './apiservice.service';

@Injectable({
  providedIn: 'root'
})
export class DataResolverService implements Resolve<any> {
  constructor(private serve: ApiserviceService,private activatedRoute: ActivatedRoute,private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem("accessToken")) { 
      return this.serve.getMovies();}
    else { this.router.navigate(['/']); }
  }
}

