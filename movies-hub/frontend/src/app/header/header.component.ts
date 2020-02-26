import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  catogry: any;

  constructor(private router: Router, private myservice: ApiserviceService, private activatedRoute: ActivatedRoute) {
    let id = this.activatedRoute.snapshot.params.id;
   }

  ngOnInit() {
    this.getCategory();
  }
  logout() {
    localStorage.removeItem("accessToken");
    this.router.navigate(['/']);
  }
  getCategory() {
    this.myservice.getCat().subscribe((res) => {
      this.catogry = res;
    });
  }
  onSelect(obj) {
    this.myservice.setData(obj.id);
  }
  onClick() {
    this.myservice.setDataT();
    if(this.activatedRoute.snapshot.routeConfig.path == "list"){
      this.router.navigate(['list']);
    }
    else{
      this.router.navigate(['list']);
    }
  }
}

