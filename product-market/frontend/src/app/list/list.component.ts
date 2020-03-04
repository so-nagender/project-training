import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {ProductcatchService} from '../productcatch.service'
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  datas: any;
  id: any;
  cartbodyname: any;
  cartdata : any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private serve: ProductcatchService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.datas = data.data;
      this.datas.forEach(item => (item.rating = parseInt(item.rating,10)));
      console.log(this.datas)
    });
    this.serve.getnewItem().subscribe(() => {
      const varId = this.activatedRoute.snapshot.params.id;
      this.serve.getItems(varId).subscribe(res => {
        this.datas = res;
        this.datas.forEach(item => (item.rating = parseInt(item.rating,10)));
      });
    });
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
    let newquant : number
    this.serve.getCart(this.cookieService.get('username')).subscribe(res => {
      let counter : number = 0
      let updateId : number 
      this.cartdata = res;
      this.cartdata.forEach(item => {
        if(item.prodId == data.id){counter = counter + 1;newquant = item.quantity + 1;updateId = item.id;;console.log(item)}
        else{counter = counter + 0}
      });
      console.log(counter);
      if(counter == 0){
        const obj = {
          name: data.name,
          rating: data.rating,
          cost: data.cost,
          description: data.description,
          quantity : 1,
          username : this.cookieService.get('username'),
          prodId : parseInt(data.id)
        };
        this.serve.addCart(obj).subscribe();
        this.serve.setnewsubCart();
        this.serve.setcartlength();
      }
      else{
        const obj = {
          name: data.name,
          rating: data.rating,
          cost: data.cost,
          description: data.description,
          quantity : newquant,
          username : this.cookieService.get('username'),
          prodId : parseInt(data.id)
        };
        console.log(updateId)
        this.serve.updateproductCart(updateId,obj).subscribe();
        this.serve.setnewsubCart();
        this.serve.setcartlength();
      }
      
    });  
    this.cartbodyname = data.name  
    
    
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
