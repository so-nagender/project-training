import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  val = '/login/'
  buttonisdisabled: boolean= false;
  user: string;
  constructor(private routes: Router, private api : ApiService, private cookieService: CookieService) { }
  
  ngOnInit() {
    this.api.currentMessage.subscribe(message=>{
    this.buttonisdisabled= message;
    this.user= this.cookieService.get('user');
    })
    if(localStorage.getItem('accessToken')){
    this.buttonisdisabled = true;
    }

  }


  logout(){
    localStorage.clear();
    this.cookieService.delete('user');
    if(localStorage.getItem('accessToken')){
      this.buttonisdisabled= false;
      this.routes.navigate([''])
      
    }
   
  }

  viewBook(){
    this.routes.navigate(['/contactlist'])
  }

}
