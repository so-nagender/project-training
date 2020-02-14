import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFirst]'
})
export class FirstDirective {
  constructor(private el: ElementRef) {}
  @Input('appFirst') firstColor; // Input from View
  // On Mouse over content...using mouse listener.
  inputText = 'Hey Default text';
  @HostListener('mouseenter') onMouseEnter() {
    this.colorChange(this.firstColor || 'red');
    this.textChange(this.inputText);
  }
  // On mouse release...
  @HostListener('mouseleave') onMouseLeave() {
    this.colorChange(null);
    this.textChange(null);
    this.el.nativeElement.innerText = 'Hey Hii';
  }
  // On Mouse Come text change..
  private textChange(temp: string) {
    this.el.nativeElement.innerText = temp;
  }
  private colorChange(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
