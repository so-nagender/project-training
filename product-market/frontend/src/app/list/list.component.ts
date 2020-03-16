import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {ProductcatchService} from '../productcatch.service'
import { CookieService } from 'ngx-cookie-service';
import { ItemviewComponent } from '../itemview/itemview.component';



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
  catname:any;
  deletedata: any

  constructor(
    private activatedRoute: ActivatedRoute,
    private serve: ProductcatchService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  ngOnInit() {
    let toggle = 0
    this.serve.getallcart().subscribe(res => {
      res.forEach(element => {
        if(element.username==(this.cookieService.get('username'))){
          console.log(element)
          toggle = toggle + 1
          console.log(" ia m")
        }
      });
      if(toggle == 0){
        const obj2 = {"username" : this.cookieService.get('username'),"items" : []}       
        this.serve.addCart(obj2).subscribe();
        console.log("we are")
      }
    })
    this.activatedRoute.data.subscribe(data => {
      this.datas = data.data;
      this.datas.forEach(item => (item.rating = parseInt(item.rating,10)));
      this.serve.getparticularCat(this.activatedRoute.snapshot.params.id).subscribe(res => {
        this.catname = res;
        console.log(this.catname);
      })
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
    let toggle = 0
    this.serve.getallcart().subscribe((res) => {
      for(let i =0;i<res.length;i++){
        for(let j = 0;j <res[i].items.length;j++){
          if(res[i].items[j].itemId == x){
            res[i].items.splice(j,1)
            console.log(res[i].items)
            console.log(res[i].id)
            console.log(res[i])
            this.serve.updateproductCart(res[i].id,res[i]).subscribe();
            break;
          }
        }
        
      }
    })
    this.serve.deleteItem(x).subscribe();
    this.serve.sendnewItem();
    this.serve.setnewsubCart();
    this.serve.setcartlength();       
  }

  onaddItem() {
    this.router.navigate(['additem'], { relativeTo: this.activatedRoute });
  }

  onaddCart(data) {
    console.log(data.id)
    this.serve.getCart(this.cookieService.get('username')).subscribe(res => {
      this.cartdata = res[0];
      let counter = 0
      for(let i =0;i<this.cartdata.items.length;i++){
        if(this.cartdata.items[i].itemId == data.id){  
          this.cartdata.items[i].quantity = this.cartdata.items[i].quantity + 1;
          counter = counter + 1;
          break;
        }
        console.log(counter)
      }
      if(counter == 0){
        const obj1 = {"itemId" : data.id,"quantity" : 1}
        this.cartdata.items.push(obj1)
        const obj = {"username" : this.cartdata.username,"items": this.cartdata.items}
        this.serve.updateproductCart(this.cartdata.id,obj).subscribe();
        this.serve.setnewsubCart();
        this.serve.setcartlength(); 
      }
      else{
        this.serve.updateproductCart(this.cartdata.id,this.cartdata).subscribe();
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
