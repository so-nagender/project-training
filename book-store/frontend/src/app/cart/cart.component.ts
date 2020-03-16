import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

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
  apiQuant =[];

  constructor(private cookieService: CookieService,private api: ApiService, private activatedRoute: ActivatedRoute, public routes : Router) { }

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
            this.Book.quantity = this.apiCart[i].bookID[j].quantity;
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
              Swal.fire({
                title: 'Deleted',
                text: "Book Deleted from Cart "
              })
            }
            const obj = {"user": this.apiCart[i].user, "bookID": this.apiCart[i].bookID};
            this.api.updateCart(obj, this.apiCart[i].id).subscribe();
            

          }
        }
      }
    });
  }

  decrease(x){
    let id = x;
    this.api.getCart().subscribe((res)=>{
      this.apiCart = res;
      for(let i=0; i < this.apiCart.length; i++){
        if(this.user == this.apiCart[i].user){
          for(let j=0; j < this.apiCart[i].bookID.length; j++){
            if(this.apiCart[i].bookID[j].itemID == id){
              if(this.apiCart[i].bookID[j].quantity == 1){
                Swal.fire({
                  title: 'Oops...',
                  text: "Can't Decrease Quantity Please Delete "
                })
              }
              else{
                this.apiCart[i].bookID[j].quantity -= 1;
                console.log(this.apiCart[i].bookID[j].quantity)
                const obj1 = {"user": this.apiCart[i].user, "bookID": this.apiCart[i].bookID};
                this.api.updateCart(obj1, this.apiCart[i].id).subscribe();
                break;
              }
            }
          }
        }
      }
    });
  }

  increase(x){
    let id = x;
    this.api.getCart().subscribe((res)=>{
      this.apiCart = res;
      for(let i=0; i < this.apiCart.length; i++){
        if(this.user == this.apiCart[i].user){
          for(let j=0; j < this.apiCart[i].bookID.length; j++){
            if(this.apiCart[i].bookID[j].itemID == id){
            
              this.apiCart[i].bookID[j].quantity += 1;
              console.log(this.apiCart[i].bookID[j].quantity)
              const obj1 = {"user": this.apiCart[i].user, "bookID": this.apiCart[i].bookID};
              this.api.updateCart(obj1, this.apiCart[i].id).subscribe();
              break;
            
            }
          }
        }
      }
    });
  }

}
