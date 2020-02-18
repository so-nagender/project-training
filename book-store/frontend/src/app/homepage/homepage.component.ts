import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {TimelineMax, TweenMax} from "gsap";



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  sl1ider = document.querySelector('.slider')
  logo = document.querySelector('.logo')
  headline = document.querySelector('.headline')
  @ViewChild('movable', {static: true}) AnimationObject: ElementRef;
  @ViewChild('slider', {static: true}) slider: ElementRef;
  constructor( ) {}
  
  animation() {
    let t1: TimelineMax = new TimelineMax();
    t1.fromTo(this.AnimationObject.nativeElement, 1, 
    {height : '0%'},{height : '80%'}).fromTo(
      this.AnimationObject.nativeElement, 1.2,
      { width: "100"},
      {width :"80%"}

    ).fromTo(this.slider.nativeElement, -1.2 ,{x:"-100"},{x:"0%"}, "-=1.2")
  }

  ngOnInit() {
    this.animation()
  }

}
