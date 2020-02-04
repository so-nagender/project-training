import { Component } from '@angular/core';
// import { NgModule } from '@angular/core';
// import { AppComponent } from './app.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-to-do-list';
  // data:string = "Priti Raj";
  // position: string ="Software Engineer";
  berger:number;
  pizza: number;
  result: number;
  totalFood(){
    this.result == parseInt(this.berger) + parseInt(this.pizza);
  }

}
