import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  user: any;
  apiCart;
  Book;
  apiBook = [];

  constructor(private cookieService: CookieService,private api: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getCookie();
    this.cart();
  }

  getCookie(){
    this.user= this.cookieService.get('user');
  }
  cart(){
    this.api.getCart().subscribe((res)=>{
      this.apiCart = res;
      for(let i=0; i < this.apiCart.length; i++){
        if(this.user == this.apiCart[i].user){
          for(let j=0; j < this.apiCart[i].bookID.length; j++){
            let x = this.apiCart[i].bookID[j].itemID;
            this.api.getCatDetail(x).subscribe((item)=>{
            this.Book =item;
            this.Book.discountPrice = this.Book.BookPrice - (this.Book.BookPrice*this.Book.discount/100);
            this.apiBook.push(this.Book);
            });
          }
        }
      }
    });
    
  }

  stars(x) {
    let item: number[] =[];
    for(let i=1; i<=x; i++)
    {
      item.push(i);
    }
    return item;
  }

  onDeleteCart(x){
    let id =x;
    this.api.getCart().subscribe((res)=>{
      this.apiCart = res;
      for(let i=0; i < this.apiCart.length; i++){
        if(this.user == this.apiCart[i].user){
          for(let j=0; j < this.apiCart[i].bookID.length; j++){
            if(id == this.apiCart[i].bookID[j].itemID){
              this.apiCart[i].bookID.splice(j, 1);
            }
            const obj = {"user": this.apiCart[i].user, "bookID": this.apiCart[i].bookID};
            this.api.updateCart(obj, this.apiCart[i].id).subscribe((res)=>{
              this.apiCart = res;
              for(let j=0; j < this.apiCart.bookID.length; j++){
                let x = this.apiCart.bookID[j].itemID;
                this.api.getCatDetail(x).subscribe((item)=>{
                this.Book =item;
                this.Book.discountPrice = this.Book.BookPrice - (this.Book.BookPrice*this.Book.discount/100);
                this.apiBook=[];
                this.apiBook.push(this.Book);
                });
              }
            });  
          }
        }
      }
    });
  }

}
