import { Component, OnInit } from "@angular/core";
import { ProductcatchService } from "../productcatch.service";
import { ActivatedRoute, Router } from "@angular/router";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  constructor(
    private serve: ProductcatchService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cookieService: CookieService
  ) {}
  datas: any;
  counter: number = 0;
  totalCost: number = 0;

  ngOnInit() {
    this.serve.getCart(this.cookieService.get('username')).subscribe(res => {
      this.datas = res;
      this.datas.forEach(item => {
        item.rating = parseInt(item.rating);
        this.counter = this.counter + item.quantity;
        this.totalCost = (item.cost * item.quantity) + this.totalCost;
      });
    });
    this.serve.getnewsubCart().subscribe(() => {
      this.serve.getCart(this.cookieService.get('username')).subscribe(res => {
        this.counter = 0;
        this.totalCost = 0;
        this.datas = res;
        this.datas.forEach(item => {
          item.rating = parseInt(item.rating);
          this.counter = this.counter + item.quantity;
          this.totalCost = (item.cost * item.quantity) + this.totalCost;
        });
      });
    });
  }

  onClose() {
    if (
      this.activatedRoute.snapshot["_routerState"]._root.children[0].value
        .params.id
    ) {
      const id = this.activatedRoute.snapshot["_routerState"]._root.children[0]
        .value.params.id;
      const url = `items/category/${id}`;
      this.router.navigate([url]);
    } else {
      this.router.navigate(["/categories"], {
        relativeTo: this.activatedRoute
      });
    }
  }
  onDelete(data) {
    const x = data.id;
    this.serve.deleteCart(x).subscribe();
    this.serve.setnewsubCart();
    this.serve.setcartlength();
  }
}
