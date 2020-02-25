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

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params.id;
   }

  ngOnInit() {
    this.book();
  }
  book(){
    this.api.getBookDetail(this.id).subscribe((res)=>{
      this.apiBook = res;
    });
    this.api.getCatDetail(this.id).subscribe((res)=>{
      this.apiBook = res;
    });
  }

}
