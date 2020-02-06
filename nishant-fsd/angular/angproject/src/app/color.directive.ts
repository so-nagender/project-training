import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private el: ElementRef) {
 }
 @Input()
 appColor:string;
 defaultColor: string;
 @HostListener('mouseenter') onMouseEnter() {
  this.color(this.appColor|| this.defaultColor || 'red');
}

@HostListener('mouseleave') onMouseLeave() {
  this.color(null);
}
private color(color: string) {
  this.el.nativeElement.style.backgroundColor = color;
}
}