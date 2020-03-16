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
  cartdata : any
  datas: any = [];
  counter: number = 0;
  totalCost: number = 0;
  quantity = []

  ngOnInit() {
    this.serve.getCart(this.cookieService.get('username')).subscribe(res => {
        this.cartdata = res[0];
        this.cartdata.items.forEach(item => {
        this.serve.getParticularItem(item.itemId).subscribe(res => {
        res.quantity = item.quantity;
        console.log(res.rating)
        this.datas.push(res);
        this.totalCost = this.totalCost + (res.cost * res.quantity)
        this.counter =  this.counter + res.quantity
      })
      });
    });
    this.serve.getnewsubCart().subscribe(() => {
      this.serve.getCart(this.cookieService.get('username')).subscribe(res => {
        this.cartdata = res[0];
        this.datas = []
        this.totalCost = 0
        this.counter = 0
        this.cartdata.items.forEach(item => {
          this.serve.getParticularItem(item.itemId).subscribe(res => {
          res.quantity = item.quantity;
          this.datas.push(res);
          this.totalCost = this.totalCost + (res.cost * res.quantity)
          this.counter =  this.counter + res.quantity
        })
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
    this.serve.getCart(this.cookieService.get('username')).subscribe(res => {
      this.cartdata = res[0];
      for(let i =0;i<this.cartdata.items.length;i++){
        if(this.cartdata.items[i].itemId == x){
          console.log(this.cartdata.items[i].itemId)
          this.cartdata.items.splice(i,1)
        }
      }
      console.log(this.cartdata.items)
      const obj = {"username" : this.cartdata.username,"items": this.cartdata.items}
      this.serve.updateproductCart(this.cartdata.id,obj).subscribe();
      this.serve.setnewsubCart();
      this.serve.setcartlength();  
    });
  }

  onplusitem(data){
    this.serve.getCart(this.cookieService.get('username')).subscribe(res => {
      this.cartdata = res[0];
      for(let i =0;i<this.cartdata.items.length;i++){
        if(this.cartdata.items[i].itemId == data.id){  
          this.cartdata.items[i].quantity = this.cartdata.items[i].quantity + 1;
          break;
        }
      }
      console.log(this.cartdata)
      this.serve.updateproductCart(this.cartdata.id,this.cartdata).subscribe();
      this.serve.setnewsubCart();
      this.serve.setcartlength();       
    }); 
  }

  onsubitem(data){
    this.serve.getCart(this.cookieService.get('username')).subscribe(res => {
      this.cartdata = res[0];
      for(let i =0;i<this.cartdata.items.length;i++){
        if(this.cartdata.items[i].itemId == data.id){
          if(this.cartdata.items[i].quantity == 1){
            this.cartdata.items.splice(i,1)
            break;
          }
          else{
            this.cartdata.items[i].quantity = this.cartdata.items[i].quantity - 1;
            break;
          }
        }
      }
      console.log(this.cartdata)
      this.serve.updateproductCart(this.cartdata.id,this.cartdata).subscribe();
      this.serve.setnewsubCart();
      this.serve.setcartlength();       
    });
  }
}
