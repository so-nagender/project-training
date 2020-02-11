import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'splitwise-app';
  teams$ = this.http.get('/api/teams');
  constructor(private http: HttpClient) {}
}
  // two way data binding
  // firstname : string = "Shikhar";
  // lastname : string = "Gupta";

