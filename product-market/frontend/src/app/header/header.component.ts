import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductcatchService } from "../productcatch.service";
import { ThrowStmt } from '@angular/compiler';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private serve: ProductcatchService,private cookieService: CookieService) {
     
  }
  datas: any;
  username : any;
  items : any
  counter: number = 0;
  ngOnInit() {
    this.serve.getCart(this.cookieService.get('username')).subscribe((res)=>{
      this.items = res;
      this.items.forEach(item => {
        this.counter = this.counter + item.quantity;
      });
    })
    this.serve.getData().subscribe(data => {
      this.datas = data;
      console.log(this.datas);
    });
    this.serve.getMessage().subscribe(() => {
      this.serve.getData().subscribe(res => {
        this.datas = res;
      });
    });
    this.username = this.cookieService.get('username')   
    this.serve.getcartlength().subscribe(()=>{
      this.serve.getCart(this.cookieService.get('username')).subscribe((res)=>{
        this.counter = 0
        this.items = res;
        this.items.forEach(item => {
          this.counter = this.counter + item.quantity;
        });
      })
    })
  }
  onLogout() {
    localStorage.removeItem("accessToken");
    this.cookieService.delete('username');
    this.router.navigate(["/home"]);
  }
}
