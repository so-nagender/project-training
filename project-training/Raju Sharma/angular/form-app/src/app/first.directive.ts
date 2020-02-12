import { Directive, ElementRef, HostListener, Input  } from '@angular/core';

@Directive({
  selector: '[appFirst]'
})
export class FirstDirective {

  constructor(private el: ElementRef) { }
  @Input('appFirst') firstColor: string;
  @Input('firstInput') col:string;
  @Input('secondInput') text:string;
  text1:string = "Hey guys surprise";
  path:string = '../../assests/img/bg.jpg';



  @HostListener('mouseenter') onMouseEnter() {
    
    this.test(this.col || 'red');
    this.tess(this.text);
    // this.img(this.path);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.test(null);
    this.tess(null);
    this.el.nativeElement.innerText = "Hey Hii";
  }
  private tess(temp:string) {
    this.el.nativeElement.innerText = temp;
  }
  private test(color:string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
  // private img(a:string) {
  //   this.el.nativeElement.backgroundImage =  a;
  //   console.log('gjasgh')
  // }
}
 