import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appModalHighlight]'
})
export class ModalHighlightDirective {

  constructor(private el: ElementRef) { }

  @Input('appModalHighlight') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() 
  {
    this.highlight(this.highlightColor || 'red');
    this.jaadu(); 
  }

  @HostListener('mouseleave') onMouseLeave() 
  {
    this.highlight(null);
    this.nojaadu();
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
  private jaadu() 
  {
    this.el.nativeElement.innerText = "Wingardium Leviosa";
  }
  private nojaadu() 
  {
    this.el.nativeElement.innerText = "Pitradev Sanrakshanam";
  }
}





