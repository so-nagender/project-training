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
  showcategoryview ;
  apiCat;

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute ) 
  {
    
  }  

  ngOnInit() {
    // this.book();
    // this.meta_data();
    this.id = this.activatedRoute.snapshot.params.id;
    this.api.getCatDetailEdit(this.id).subscribe((res)=>{
      this.apiCat = res;
    });
    console.log(this.id, this.apiCat)

    
  }

  // Cat(){
  //   this.api.getCatDetailEdit(this.id).subscribe((res)=>{
  //     this.apiCat = res;
  //   });
  // }
  // book(){
  //   this.api.getBook().subscribe((res)=>{
  //     this.apiBook = res;
  //   });
  //   this.api.getCat().subscribe((res)=>{
  //     this.apiBook = res;
  //   });
  // }
  
  // onDelete1(x) {
  //   const id = x;
  //   this.api.deleteTeams(id).subscribe();
  //   this.categorydataview();
  //   this.meta_data();
  // } 
  
  // categorydataview(){
  //   this.api.Viewdatacategories().subscribe(data=> { console.log('_______>>>',data)})
  // }
  
  // meta_data(){
  //   const data =this.api.charid()
  //   console.log(data)
  //   this.api.retrivedata(data).subscribe(res=> {this.getdata =res;
    
  //   })
  //   this.api.getCatDetailEdit(data).subscribe((res)=>{
  //     this.apiCat = res;
  //   });
   
  // }
 
 
}
