import { Component } from '@angular/core';
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
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'burgerr';
  Pizza={value:0};
  Burger={value:0}

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
}
