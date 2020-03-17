import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {
  searchText: string;
  apiBook;
  id;
  bookdata: any;
  user;
  apiCart;


  constructor(private api: ApiService, private activatedRoute: ActivatedRoute, private cookieService: CookieService) { 
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.book();
    this.getCookie();
  
  }
  book(){
    this.api.getBook().subscribe((res)=>{
     
      this.apiBook = res;
    });
    this.api.getCat().subscribe((res)=>{
      res = res.map(item => ({
        ...item,
        discountPrice: item.BookPrice-(item.BookPrice*item.discount/100)
      }))
      console.log('mapped data',res)
      this.apiBook = res;
    });
  }

  getCookie(){
    this.user= this.cookieService.get('user');
  }

  addCart(x){
    let id =x;
    this.api.getCart().subscribe((res)=>{
      this.apiCart = res;
      for(let i=0; i < this.apiCart.length; i++){
        if(this.user == this.apiCart[i].user){
          let counter = 0;
          let bookId;
          for(let j=0; j < this.apiCart[i].bookID.length; j++){
            if(this.apiCart[i].bookID[j].itemID == id){
              counter++;
              bookId = j;
            }
          }
          if(counter > 0){
            this.apiCart[i].bookID[bookId].quantity += 1;
            const obj1 = {"user": this.apiCart[i].user, "bookID": this.apiCart[i].bookID};
            this.api.updateCart(obj1, this.apiCart[i].id).subscribe();
            Swal.fire({
              title: 'Yeah...',
              text: "Book Added to Cart "
            })
            break;
          }
          else{
            const obj ={"itemID": id, "quantity": 1};
            this.apiCart[i].bookID.push(obj);
            const obj1 = {"user": this.apiCart[i].user, "bookID": this.apiCart[i].bookID};
            this.api.updateCart(obj1, this.apiCart[i].id).subscribe();
            Swal.fire({
              title: 'Yeah...',
              text: "Book Added to Cart "
            })
            break;
          } 
      }
    }
    })
  }

  onDelete(x) {
    const id = x;
    this.api.deleteTeams(id).subscribe();
    this.book();
  } 
  stars(x) {
    let item: number[] =[];
    for(let i=1; i<=x; i++)
    {
      item.push(i);
    }
    return item;
  }

}
