import { Component, OnInit } from "@angular/core";
import { ProductcatchService } from "../productcatch.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  constructor(
    private serve: ProductcatchService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  datas: any;
  counter: number = 0;
  totalCost: number = 0;

  ngOnInit() {
    this.serve.getCart().subscribe(res => {
      this.datas = res;
      this.datas.forEach(item => {
        item.rating = parseInt(item.rating);
        this.counter = this.counter + 1;
        this.totalCost = item.cost + this.totalCost;
      });
    });
    this.serve.getnewsubCart().subscribe(() => {
      this.serve.getCart().subscribe(res => {
        this.counter = 0;
        this.totalCost = 0;
        this.datas = res;
        this.datas.forEach(item => {
          item.rating = parseInt(item.rating);
          this.counter = this.counter + 1;
          this.totalCost = item.cost + this.totalCost;
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
      const url = `items/${id}`;
      this.router.navigate([url]);
    } else {
      console.log("2");
      this.router.navigate(["/categories"], {
        relativeTo: this.activatedRoute
      });
    }
  }
  onDelete(data) {
    const x = data.id;
    this.serve.deleteCart(x).subscribe();
    this.serve.getCart().subscribe(res => {
      this.datas = res;
      this.datas.forEach(item => {
        item.rating = parseInt(item.rating);
      });
      this.counter = this.counter - 1;
      this.totalCost = this.totalCost - parseInt(data.cost);
    });
  }
}
