import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {ProductcatchService} from '../productcatch.service'



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  datas: any;
  id: any;
  cartbodyname: any;
  catname:any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private serve: ProductcatchService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.datas = data.data;
      this.datas.forEach(item => (item.rating = parseInt(item.rating,10)));
    });
    this.serve.getnewItem().subscribe(() => {
      const varId = this.activatedRoute.snapshot.params.id;
      this.serve.getItems(varId).subscribe(res => {
        this.datas = res;
        this.datas.forEach(item => (item.rating = parseInt(item.rating,10)));
      });
    });
    this.serve.getparticularCat(this.activatedRoute.snapshot.params.id).subscribe(res => {
      this.catname = res;
      console.log(this.catname,">>>>>>>>");
    })

  }

  onClose(param) {
    const x = param.id;
    const catId = param.catId;
    this.serve.deleteItem(x).subscribe();
    this.serve.getItems(catId).subscribe(param => {
      this.datas = param;
      this.datas.forEach(item => (item.rating = parseInt(item.rating,10)))
    });
  }

  onaddItem() {
    this.router.navigate(['additem'], { relativeTo: this.activatedRoute });
  }

  onaddCart(data) {
    const obj = {
      name: data.name,
      rating: data.rating,
      cost: data.cost,
      description: data.description
    };
    this.cartbodyname = data.name
    this.serve.addCart(obj).subscribe();
    this.serve.setcartlength();
    this.serve.setnewsubCart();
  }


  // sorting fuction of items by name
   sortTableAsc (){ 
     console.log("shashdhahdhasdh<<<<<<<<<<<<<<<<<<<<<<");
    var table, i, x, y; 
    table = document.getElementById("table"); 
    var switching = true; 

    // Run loop until no switching is needed 
    while (switching) { 
        switching = false; 
        var rows = table.rows; 
      console.log(rows)
        for (i = 1; i < (rows.length - 1); i++) { 
            var Switch = false; 
            // Fetch 2 elements that need to be compared 
            x = rows[i].getElementsByTagName("td")[0]; 
            y = rows[i + 1].getElementsByTagName("td")[0]; 

            // Check if 2 rows need to be switched 
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) 
                { 

                // If yes, mark Switch as needed and break loop 
                Switch = true; 
                break; 
            }
        } 
        if (Switch) { 
            // Function to switch rows and mark switch as completed 
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); 
            switching = true; 
        } 
    } 
}
sortTableDsc (){ 
  console.log("shashdhahdhasdh<<<<<<<<<<<<<<<<<<<<<<");
 var table, i, x, y; 
 table = document.getElementById("table"); 
 var switching = true; 

 // Run loop until no switching is needed 
 while (switching) { 
     switching = false; 
     var rows = table.rows; 
   console.log(rows)
     for (i = 1; i < (rows.length - 1); i++) { 
         var Switch = false; 
         // Fetch 2 elements that need to be compared 
         x = rows[i].getElementsByTagName("td")[0]; 
         y = rows[i + 1].getElementsByTagName("td")[0]; 

         // Check if 2 rows need to be switched 
         if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) 
             { 

             // If yes, mark Switch as needed and break loop 
             Switch = true; 
             break; 
         }
     } 
     if (Switch) { 
         // Function to switch rows and mark switch as completed 
         rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); 
         switching = true; 
     } 
 } 
}
// sorting function of cost 
sortTablecostAsc (){ 
  console.log("shashdhahdhasdh<<<<<<<<<<<<<<<<<<<<<<");
 var table, i, x, y; 
 table = document.getElementById("table"); 
 var switching = true; 

 // Run loop until no switching is needed 
 while (switching) { 
     switching = false; 
     var rows = table.rows; 
   console.log(rows)
     for (i = 1; i < (rows.length - 1); i++) { 
         var Switch = false; 
         // Fetch 2 elements that need to be compared 
         x = rows[i].getElementsByTagName("td")[1]; 
         console.log(x)
         y = rows[i + 1].getElementsByTagName("td")[1]; 
         // Check if 2 rows need to be switched 
         if (Number(x.childNodes[0].innerHTML) > Number(y.childNodes[0].innerHTML)) 
             { 

             // If yes, mark Switch as needed and break loop 
             Switch = true; 
             break; 
         }
     } 
     if (Switch) { 
         // Function to switch rows and mark switch as completed 
         rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); 
         switching = true; 
     } 
 } 
}
sortTablecostDsc (){ 
  console.log("shashdhahdhasdh<<<<<<<<<<<<<<<<<<<<<<");
 var table, i, x, y; 
 table = document.getElementById("table"); 
 var switching = true; 

 // Run loop until no switching is needed 
 while (switching) { 
     switching = false; 
     var rows = table.rows; 
   console.log(rows)
     for (i = 1; i < (rows.length - 1); i++) { 
         var Switch = false; 
         // Fetch 2 elements that need to be compared 
         x = rows[i].getElementsByTagName("td")[1]; 
         console.log(x)
         y = rows[i + 1].getElementsByTagName("td")[1]; 
         // Check if 2 rows need to be switched 
         if (Number(x.childNodes[0].innerHTML) < Number(y.childNodes[0].innerHTML)) 
             { 

             // If yes, mark Switch as needed and break loop 
             Switch = true; 
             break; 
         }
     } 
     if (Switch) { 
         // Function to switch rows and mark switch as completed 
         rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); 
         switching = true; 
     } 
 } 
}

}
