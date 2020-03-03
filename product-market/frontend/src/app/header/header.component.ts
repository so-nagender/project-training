import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductcatchService } from "../productcatch.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private serve: ProductcatchService) {}
  datas: any;
  items : any
  counter: number = 0;
  ngOnInit() {
    this.serve.getCart().subscribe((res)=>{
      this.items = res;
      this.counter = this.items.length
      console.log(this.items)
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
    this.serve.getcartlength().subscribe(()=>{
      this.serve.getCart().subscribe((res)=>{
        this.items = res;
        this.counter = this.items.length
      })
    })
  }
  onLogout() {
    localStorage.removeItem("accessToken");
    this.router.navigate(["/home"]);
  }
}
