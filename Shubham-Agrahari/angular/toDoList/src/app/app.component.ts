import {Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  // teams$: Observable<any> = this.http.get('/api/teams');
  teams$ = this.http.get('http://localhost:3000/api/teams');
  
  ​
  constructor(private http: HttpClient) {
    console.log(this.teams$)
  }
  title = 'toDoList';
  MyObj={
  fname:"Shubham",
  lName:"Agrahari"
};
}
