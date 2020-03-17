import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators} from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router'
import Swal from 'sweetalert2';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-view-cat',
  templateUrl: './view-cat.component.html',
  styleUrls: ['./view-cat.component.css']
})
export class ViewCatComponent implements OnInit {
  id;
  apiCat;
  apiBook;
  user;
  apiCart;

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute, private http: HttpClient, private formBuilder: FormBuilder,private router: Router, private cookieService: CookieService) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.Cat();
    this.getCookie();
   
  }

  getCookie(){
    this.user= this.cookieService.get('user');
  }


  Cat(){
    this.api.getCatDetailEdit(this.id).subscribe((res)=>{
      this.apiCat = res;
    }); 
    this.api.getCatBook(this.id).subscribe((res)=>{
      res = res.map(item => ({
        ...item,
        discountPrice: item.BookPrice-(item.BookPrice*item.discount/100)
      }))
      console.log('mapped data',res)
      this.apiBook =res;
    }); 
  }

  onDelete1(x) {
    const id = x;
    this.api.deleteTeams(id).subscribe();
    this.Cat();
  } 
  stars(x) {
    let item: number[] =[];
    for(let i=1; i<=x; i++)
    {
      item.push(i);
    }
    return item;
  }

  addCart(x){
    let id =x;
    this.api.getCart().subscribe((res)=>{
      this.apiCart = res;
      let userCounter = 0;
      let userId;
      for(let i=0; i < this.apiCart.length; i++){
        if(this.user == this.apiCart[i].user){
          userCounter++;
          userId = i;
        }
      }
      if(userCounter > 0){
        let counter = 0;
        let bookId;
        for(let j=0; j < this.apiCart[userId].bookID.length; j++){
          if(this.apiCart[userId].bookID[j].itemID == id){
            counter++;
            bookId = j;
          }
        }
        if(counter > 0){
          this.apiCart[userId].bookID[bookId].quantity += 1;
          const obj1 = {"user": this.apiCart[userId].user, "bookID": this.apiCart[userId].bookID};
          this.api.updateCart(obj1, this.apiCart[userId].id).subscribe();
          Swal.fire({
            title: 'Yeah...',
            text: "Book Added to Cart "
          })
        }
        else{
          const obj ={"itemID": id, "quantity": 1};
          this.apiCart[userId].bookID.push(obj);
          const obj1 = {"user": this.apiCart[userId].user, "bookID": this.apiCart[userId].bookID};
          this.api.updateCart(obj1, this.apiCart[userId].id).subscribe();
          Swal.fire({
            title: 'Yeah...',
            text: "Book Added to Cart "
          })
        } 
      }
      else{
        const obj1 = {"user": this.user, "bookID":[{"itemID": id, "quantity": 1}] };
        this.api.addcart(obj1).subscribe();
        Swal.fire({
          title: 'Yeah...',
          text: "Book Added to Cart "
        })
      }
    })
  }



}
