import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TimeServiceService } from './time-service.service';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<any> {
  constructor(
    private fakeApi: TimeServiceService,
    private activatedRoute: ActivatedRoute
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params.id;
    return this.fakeApi.getdataId(id);
  }
}
