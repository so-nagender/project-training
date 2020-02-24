import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  
  searchText: string;
  apiBook;
  id;

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute ) 
  {
    this.id = this.activatedRoute.snapshot.params.id;
  }  

  ngOnInit() {
    this.book();
  }
  book(){
    this.api.getBook().subscribe((res)=>{
      this.apiBook = res;
    });
    this.api.getCat().subscribe((res)=>{
      this.apiBook = res;
    });
  }

  onDelete(x){
    this.id = x;
    
  }
 
  

}
