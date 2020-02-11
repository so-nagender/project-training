import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private el: ElementRef) {
    // el.nativeElement.style.backgroundColor = 'yellow';
 }
 @Input()
 appColor={
   color : 'red',
  color2 : 'blue'
 };


 @HostListener('click') onMouseEnter() {
  this.color(this.appColor.color,this.appColor.color2);

  }





private color(color: string , color2:string) {
 
  this.el.nativeElement.style.backgroundColor = color;
  this.el.nativeElement.style.color = color2;
 

}
}