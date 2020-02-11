import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateseriveService {

  constructor() { }
  todayDate() {
    let ndate = new Date();
    return ndate;
  }
}
