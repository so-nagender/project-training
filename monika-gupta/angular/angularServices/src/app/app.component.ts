import { Component } from '@angular/core';
import { MyServicesService } from './my-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularServices';
  todaydate;
  movieList
 
  constructor(private myservice: MyServicesService) {}
 
  ngOnInit() {
    this.todaydate = this.myservice.todayDate();
    this.movieList = this.myservice.movies();
  }

  
}
