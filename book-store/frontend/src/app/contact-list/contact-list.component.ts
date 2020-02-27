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

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute ) 
  {
    this.id = this.activatedRoute.snapshot.params.id;
  }  

  ngOnInit() {
    this.book();
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

  bookNameSortAes (){ 
    var table, i, x, y; 
    table = document.getElementById("bookTable"); 
    var switching = true; 
    while (switching) { 
        switching = false; 
        var rows = table.rows; 
      console.log(rows)
        for (i = 1; i < (rows.length - 1); i++) { 
            var Switch = false; 
            x = rows[i].getElementsByTagName("td")[0]; 
            y = rows[i + 1].getElementsByTagName("td")[0]; 
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) 
                { 
                Switch = true; 
                break; 
            }
        } 
        if (Switch) {  
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); 
            switching = true; 
        } 
    } 
 }
 
 bookNameSortDes(){ 
  var table, i, x, y; 
  table = document.getElementById("bookTable"); 
  var switching = true; 
  while (switching) { 
      switching = false; 
      var rows = table.rows; 
    console.log(rows)
      for (i = 1; i < (rows.length - 1); i++) { 
          var Switch = false; 
          x = rows[i].getElementsByTagName("td")[0]; 
          y = rows[i + 1].getElementsByTagName("td")[0]; 
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) 
              { 
              Switch = true; 
              break; 
          }
      } 
      if (Switch) { 
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); 
          switching = true; 
      } 
  } 
 }
 
 
}
