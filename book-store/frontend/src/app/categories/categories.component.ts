import { Component, OnInit,ViewChild, ElementRef, } from '@angular/core';
import {TimelineMax, TweenMax} from "gsap";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  view_form = false
  @ViewChild('category_form', {static: true}) category_form: ElementRef;
   toggle_form() {
    this.view_form = true
  }
  constructor() { }
  animation() {
    let t1: TimelineMax = new TimelineMax();
    t1.fromTo(this.category_form, 5,{x:"-100%"},
    {x:"0%", ease:Power2.easeInOut})
      

    
  }

  ngOnInit() {
  }

}
