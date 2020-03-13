import { Component, OnInit, ViewChild } from '@angular/core';
import {ElementRef,Renderer2} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@ViewChild('headertop') header_toggle:ElementRef;
@ViewChild('toggleimage') toggleimage:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  show_hide(){
 
    console.log(this.toggleimage)
    if(this.header_toggle.nativeElement.hidden==false){
      this.header_toggle.nativeElement.hidden=true
      this.toggleimage.nativeElement.style = 'transform: rotate(' + 180 + 'deg)';
      
    }
    else
    {
      this.header_toggle.nativeElement.hidden=false
      this.toggleimage.nativeElement.style = 'transform: rotate(' + 360 + 'deg)';
    }

  }

}
