import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private myservice: ApiserviceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }
  logout() {
    localStorage.removeItem("accessToken");
    this.router.navigate(['/']);
  }
}

// onLogout(){
//   localStorage.removeItem("accessToken");
//   this.router.navigate(['/home']);
// }