import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
    val = '/login/'
  constructor(private routes: Router) { 
  //   routes.events.pipe(
  //     filter(event => event instanceof NavigationEnd)  
  //   ).subscribe((event: NavigationEnd) => {
  //     console.log("this is _________>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",event.url);
  //   });
    }
  

  ngOnInit() {
    console.log(this.routes.url)
  }
  logout(){
    localStorage.clear();

    
  }

}
