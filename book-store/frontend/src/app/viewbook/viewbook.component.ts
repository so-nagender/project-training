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
    console.log(id);
    this.api.getCart().subscribe((res)=>{
      this.apiCart = res;
      for(let i=0; i < this.apiCart.length; i++){
        if(this.user == this.apiCart[i].user){
          for(let j=0; j < this.apiCart[i].bookID.length; j++){
            if(this.apiCart[i].bookID[j].itemID != id){
              console.log(this.apiCart[i].bookID[j].itemID)
              console.log(id)
              const obj ={"itemID": id, "quantity": 1};
              console.log(this.user)
              console.log("abc")
              this.apiCart[i].bookID.push(obj);
              const obj1 = {"user": this.apiCart[i].user, "bookID": this.apiCart[i].bookID};
              this.api.updateCart(obj1, this.apiCart[i].id).subscribe();
              Swal.fire({
                title: 'Yeah...',
                text: "Book Added to Cart "
              })
              break;
            }
            else{
              let quant = this.apiCart[i].bookID[j].quantity; 
              console.log( quant );
              break;
            } 
          }
          

          // console.log('books in there',res[i].bookID)
          
         
      }
    }
    })
    // this.api.getCart().subscribe((res)=>{
    //   this.apiCart = res;
    //   for(let i=0; i < this.apiCart.length; i++){
    //     if(this.user == this.apiCart[i].user){
    //       for(let j=0; j < this.apiCart[i].bookID.length; j++){
    //         if(id == this.apiCart[i].bookID[j].itemID){
    //           console.log(this.apiCart[i].bookID[j].quantity);
    //         }
    //         else{
    //           console.log(id);
    //           const obj ={"itemID": id, "quantity": 1};
    //           this.api.addBookCart(obj, x)
    //         }
    //       }
    //     }
    //   }
    // });

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

//   bookNameSortAes (){ 
//    var table, i, x, y; 
//    table = document.getElementById("bookTable"); 
//    var switching = true; 
//    while (switching) { 
//        switching = false; 
//        var rows = table.rows; 
//      console.log(rows)
//        for (i = 1; i < (rows.length - 1); i++) { 
//            var Switch = false; 
//            x = rows[i].getElementsByTagName("td")[0]; 
//            y = rows[i + 1].getElementsByTagName("td")[0]; 
//            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) 
//                { 
//                Switch = true; 
//                break; 
//            }
//        } 
//        if (Switch) {  
//            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); 
//            switching = true; 
//        } 
//    } 
// }

// bookNameSortDes(){ 
//  var table, i, x, y; 
//  table = document.getElementById("bookTable"); 
//  var switching = true; 
//  while (switching) { 
//      switching = false; 
//      var rows = table.rows; 
//    console.log(rows)
//      for (i = 1; i < (rows.length - 1); i++) { 
//          var Switch = false; 
//          x = rows[i].getElementsByTagName("td")[0]; 
//          y = rows[i + 1].getElementsByTagName("td")[0]; 
//          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) 
//              { 
//              Switch = true; 
//              break; 
//          }
//      } 
//      if (Switch) { 
//          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); 
//          switching = true; 
//      } 
//  } 
// }



}
