import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFirstDir]'
})
export class FirstDirDirective {
 

  constructor(private el : ElementRef) {}
  @Input('appFirstDir') highlightColor: string;
  @Input() defaultColor: string;
  
  
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor|| this.defaultColor || 'red');
  }
  

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
