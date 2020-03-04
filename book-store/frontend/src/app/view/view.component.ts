import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id;
  apiBook;
  Book;

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params.id;
   }

  ngOnInit() {
    this.book();
  }
  book(){
    this.api.getBookDetail(this.id).subscribe((data)=>{
      debugger;
      this.Book = data;
      this.Book.discountPrice = this.Book.BookPrice - (this.Book.BookPrice*this.Book.discount/100);
    });
    this.api.getCatDetail(this.id).subscribe((res)=>{
      this.apiBook = res;
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

}
