import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {
  searchText: string;
  apiBook;
  id;

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute) { 
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

  onDelete(x) {
    const id = x;
    this.api.deleteTeams(id).subscribe();
    this.book();
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
