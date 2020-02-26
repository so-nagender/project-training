import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
    val = '/login/'
    buttonisdisabled: boolean= false;
  constructor(private routes: Router, private api : ApiService) { 
  //   routes.events.pipe(
  //     filter(event => event instanceof NavigationEnd)  
  //   ).subscribe((event: NavigationEnd) => {
  //     console.log("this is _________>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",event.url);
  //   });
    }
  

  ngOnInit() {
    console.log(this.routes.url)
    this.api.currentMessage.subscribe(message=>{
    this.buttonisdisabled= message;
  })
  if(localStorage.getItem('accessToken')){
    this.buttonisdisabled = true;
  }

  }
  logout(){
    localStorage.clear();
    if(localStorage.getItem('accessToken')){
      this.buttonisdisabled= false
      this.routes.navigate([''])
    }
    
  }

}
