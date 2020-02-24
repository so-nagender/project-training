import { Component, OnInit } from '@angular/core';
function item(value)
{
  this.value=value;
}
item.prototype.add =function(){
  this.value ++;
}
item.prototype.remove =function(){
  
  this.value --;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  dress = { value:0 };

  constructor() { }
 
  ngOnInit() {
  }
  add(item)
  {
   item.value ++;
  }
  remove(item)
  { 
    if (item.value>0)
    {
    item.value --;
    }
    else{
      return;
    }
  }
  }
