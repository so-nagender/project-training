import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maain',
  templateUrl: './maain.component.html',
  styleUrls: ['./maain.component.css']
})
export class MaainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  a : number = 0;
  b : number = 0;
  c: number = 0;

  addA(){
    if(this.a >= 0){
      this.a++;
      this.c = this.a + this.b
    }
  };
  addB(){
    if(this.b >= 0){
    this.b++;
    this.c = this.a + this.b
    }
  };
  subA(){
    if(this.a > 0){
    this.a--;
    this.c = this.a + this.b
    }
  }
  subB(){
    if(this.b > 0){
    this.b--;
    this.c = this.a + this.b
    }

  }

}
