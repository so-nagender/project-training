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
export class ResolverService implements Resolve<any> {
  constructor(
    private serve: ProductcatchService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('accessToken')) {
      return this.serve.getidData();
    } else {
      this.router.navigate(['/home']);
    }
  }
}
