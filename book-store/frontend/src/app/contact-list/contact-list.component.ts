import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { bufferToggle } from 'rxjs/operators';
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
 showcategoryview :boolean;

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute ) 
  {
    this.id = this.activatedRoute.snapshot.params.id;
  }  

  ngOnInit() {
   
      this.meta_data();
 
    
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

  onDelete(x) {
    const id = x;
    this.api.deleteTeams(id).subscribe();
    this.book();
  } 
  onDelete1(x) {
    const id = x;
    this.api.deleteTeams(id).subscribe();
    this.categorydataview();
    this.meta_data();
  } 
  
  categorydataview(){
    this.api.Viewdatacategories().subscribe(data=> { console.log('_______>>>',data)})
  }
  setview(){
    this.showcategoryview= false;
  }
  meta_data(){
    const data =this.api.charid()
    this.api.retrivedata(data).subscribe(res=> {this.getdata =res;
    
    })
    this.showcategoryview= true;
  }
}
