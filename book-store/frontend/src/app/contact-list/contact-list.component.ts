import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  
  searchText: string;
  apiBook;
  id;
  getdata : any
 showcategoryview = false;

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute ) 
  {
    this.id = this.activatedRoute.snapshot.params.id;
  }  

  ngOnInit() {
    this.book();
    // this.categorydataview();
    this.meta_data();
    
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
  categorydataview(){
    this.api.Viewdatacategories().subscribe(data=> { console.log('_______>>>',data)})
  }
  setview(){
    this.showcategoryview= false;
  }
  meta_data(){
    console.log('hiiiiiiiiiiii')
    const data =this.api.charid()
    this.api.retrivedata(data).subscribe(res=> {this.getdata =res; console.log('xxxxxxxxxx',this.getdata);
    
    })
    this.showcategoryview= true;
    
  

  }
}
