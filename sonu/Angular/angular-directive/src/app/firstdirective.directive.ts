import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFirstdirective]'
})
export class FirstdirectiveDirective {
  constructor(private el: ElementRef) { 
    // el.nativeElement.style.backgroundColor = 'yellow';
  }
  @Input('appFirstdirective') FirstdirectiveColor: string;
  @Input() defaultColor: string;
  
  @HostListener('mouseenter') onMouseEnter() {
    this.Firstdirective(this.FirstdirectiveColor || this.defaultColor || 'lightblue');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.Firstdirective(null);
  }
  private Firstdirective(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
