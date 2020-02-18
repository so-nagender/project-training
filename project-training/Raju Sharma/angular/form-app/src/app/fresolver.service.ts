import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MyserviceService } from './myservice.service';

@Injectable({
  providedIn: 'root'
})
export class FresolverService implements Resolve<any> {
  constructor(private fakeApi: MyserviceService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.fakeApi.getUsers(); // Rsolving function...
  }
}
