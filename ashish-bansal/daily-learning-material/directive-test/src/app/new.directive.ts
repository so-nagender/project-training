import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNew]'
})
export class NewDirective {

  constructor(private one : ElementRef) {}

  @Input('first') highlightColor: string ;
  @Input('second') me: string ;

  @HostListener('mouseenter') onMouseEnter(){
    console.log(this.one)
    this.youentered()
    this.highlight()
  }

  @HostListener('click') onClick(){
    this.one.nativeElement.innerText = "why you are messing with me you filth!?"
  }
  @HostListener('dblclick') onDoubleclick(){
    this.one.nativeElement.innerText = "i'll kill you!!!"
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.youexit()
    this.one.nativeElement.style.backgroundColor = null
    this.one.nativeElement.style.color = null
  }

  private highlight() {
    this.one.nativeElement.style.backgroundColor = this.highlightColor
    this.one.nativeElement.style.color = this.me
  }

  private youentered() {
    this.one.nativeElement.innerText = "you little piece of shit changed me"
  }

  private youexit() {
    this.one.nativeElement.innerText = "higlight me!!"
  }



}
