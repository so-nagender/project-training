import { Component } from '@angular/core';
import { NewserviceService } from './newservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'date';
  todaydate;
  constructor(private newservice: NewserviceService) {}
   ngOnInit() {
      this.todaydate = this.newservice.todayDate();
    }
  }

