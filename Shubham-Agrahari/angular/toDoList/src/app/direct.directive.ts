import { Directive, ElementRef, HostListener,Input } from '@angular/core';


@Directive({
  selector: '[appDirect]'
})
export class DirectDirective {
  constructor(private el: ElementRef) 
  {
    el.nativeElement.style.backgroundColor = 'pink';
 }
 @Input () appDirect:string;
 @Input() defaultColor: string;
 
 @HostListener('mouseenter') onMouseEnter() {
  // this.direct(this.appDirect);
  this.direct(this.appDirect || this.defaultColor);
}

@HostListener('mouseleave') onMouseLeave() {
  this.direct(null);
}

private direct(color: string) {
  this.el.nativeElement.style.backgroundColor = color;
}
  
}