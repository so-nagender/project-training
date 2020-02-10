import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
function food(value){
  this.value=value;
}
food.prototype.add=function(){
  this.value ++;

}
food.prototype.sub=function(){  
  this.value --;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyserviceService]
})
export class AppComponent {
  title = 'add-cart';
  Pizza={value: 0};
  Burger={value: 0};
  text: string;
  hero: any;

  add(food) {
    food.value ++;
  }
  sub(food) {
    if(food.value>0 )
    {
    food.value --;
  }
  else
  return;
  }
   // constructor(private _myservice: MyserviceService ){
  // }
  // ngOnInit(){
  //   this.text=this._myservice.display();
  // }
  constructor(private _heroservice: MyserviceService ){
  }
  ngOnInit(){
    this.hero=this._heroservice.getHeroes();
    this.text=this._heroservice.display();
  }
 
}

