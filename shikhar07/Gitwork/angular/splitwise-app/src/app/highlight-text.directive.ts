import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightText]'
})
export class HighlightTextDirective {

  constructor(private element: ElementRef) {}
  @Input() highlightbgcolor: string;
  @Input()  highlighttxtcolor: string;

  @HostListener('mouseenter') onmouseenter() {
    this.highlight(this.highlightbgcolor, this.highlighttxtcolor);
  }
  @HostListener('mouseleave') onmouseleave() {
    this.highlight(null, null);
  }

  private highlight(bgcolor: string, txtcolor: string){
    this.element.nativeElement.style.backgroundColor = bgcolor
    this.element.nativeElement.style.color = txtcolor 
  }

}
