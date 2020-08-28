import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { __values } from 'tslib';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  catogry: any;
  value: any;

  constructor(private router: Router, private myservice: ApiserviceService, private activatedRoute: ActivatedRoute, private cookieService: CookieService) {
    let id = this.activatedRoute.snapshot.params.id;
   }

  ngOnInit() {
    this.getCategory();
    this.getUserName();
  }
  logout() {
    localStorage.removeItem("accessToken");
    this.cookieService.delete('Test');
    this.router.navigate(['/']);
  }
  getCategory() {
    this.myservice.getCat().subscribe((res) => {
      this.catogry = res;
    });
  }
  getUserName() {
    this.value = this.cookieService.get('Test');
  }
  onSelect(obj) {
    this.myservice.setData(obj.id);
  }
  onClickMovie() {
    this.myservice.setDataT();
    if(this.activatedRoute.snapshot.routeConfig.path == "list"){
      this.router.navigate(['list']);
    } else {
      this.router.navigate(['list']);
    }
  }
}

