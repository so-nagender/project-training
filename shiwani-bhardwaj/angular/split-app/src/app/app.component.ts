import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'split-app';
  
  values = {
    name: 'shiwani'
  };
  constructor() {}

  ngOnInit() {}
}