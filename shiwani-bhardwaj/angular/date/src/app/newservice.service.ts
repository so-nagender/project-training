import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {
  todaydate(): any {
    throw new Error("Method not implemented.");
  }

  constructor() { }
  todayDate() {
    let ndate = new Date();
    return ndate;
  }
}
