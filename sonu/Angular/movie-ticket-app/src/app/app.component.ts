import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ApiService]
})
export class AppComponent {
  title = 'movie-ticket-app';
  text:string;
  array:any;
  constructor(private _apiService:ApiService){}
  ngOnInit(){
    this.text=this._apiService.display();
    this.array=this._apiService.print();
  }
}
