import { Directive, ElementRef,HostListener,Input} from '@angular/core';

@Directive({
  selector: '[appSplit]'
})
export class SplitDirective {

  constructor(private el: ElementRef) { 
   
  }
   @Input('appSplit') color: string;
  @Input('firstinput') colors:string;
  // @Input()  secondinput:string



  @HostListener('mouseenter') onMouseEnter() {
     this.Split(this.color);
      this.a(this.colors);

    // this.Split(this.secondinput);


  }

  @HostListener('mouseleave') onMouseLeave() {
    this.Split(null);
    
  
  
  }
  
  

   private Split(color: string) {
     this.el.nativeElement.style.backgroundColor = color;
   }
    private a(colors: string) {
    this.el.nativeElement.innerText = colors;
  }
}


 

 
  