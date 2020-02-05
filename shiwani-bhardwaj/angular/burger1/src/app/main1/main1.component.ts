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
  selector: 'app-main1',
  templateUrl: './main1.component.html',
  styleUrls: ['./main1.component.css']
})
export class Main1Component implements OnInit {
  burger = { value:0 };
  pizza = { value:0 };
  sandwich = { value:0 };

  constructor() { }
 
  ngOnInit() {
  }
  add(item)
  {
   item.value ++;
  }
  remove(item)
  {
    item.value --;
  }
  }
