import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProductcatchService } from './productcatch.service';


@Injectable({
  providedIn: 'root'
})
export class ResolverWelcomeService {

  constructor(private serve: ProductcatchService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (localStorage.getItem('accessToken')) {
        console.log("inside resolver")
        return this.serve.getData();
      } else {
        console.log("my")
        this.router.navigate(['']);
      }
    }


}
