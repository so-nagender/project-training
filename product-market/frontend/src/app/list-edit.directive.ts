import { Directive, ElementRef, Input, HostListener, ɵConsole } from '@angular/core';
import {ProductcatchService} from './productcatch.service';
import { ActivatedRoute } from '@angular/router';

@Directive({
  selector: '[appListEdit]'
})
export class ListEditDirective {

  constructor(private card: ElementRef,private myService: ProductcatchService,private activatedRoute: ActivatedRoute) { }
  @Input('first') datas: any;
  counter = 0;
  j = 0;

  @HostListener('click') onClick() {
    this.clicked();
  }
  clicked(){
    let self = this;
    if (this.counter === 0) {
      console.log(this.card);
      this.card.nativeElement.innerText = "Submit";
      this.card.nativeElement.parentNode.parentNode.cells[1].children[0].contentEditable = 'true';
      this.card.nativeElement.parentNode.parentNode.cells[4].children[1].children[0].children[1].children[0].children[0].contentEditable = 'true';
      this.card.nativeElement.parentNode.parentNode.cells[4].children[1].children[0].children[1].children[0].children[1].contentEditable = 'true';
      for(let i=0;i<5;i++){
        this.card.nativeElement.parentNode.parentNode.cells[2].children[i].onclick = function editStars(card){
          for(let w=0;w<5;w++){
            card.srcElement.parentNode.children[w].classList.remove("checked")
          }
          for(let x= 0;x<=i;x++){
            card.srcElement.parentNode.children[x].classList.add("checked")
          }
          self.myService.rating = i;
          };
      } 
      this.card.nativeElement.parentNode.parentNode.cells[1].children[0].style.border =
        '2px solid cadetblue';
        this.card.nativeElement.parentNode.parentNode.cells[4].children[1].children[0].children[1].children[0].children[0].style.border =
        '2px solid cadetblue';
        this.card.nativeElement.parentNode.parentNode.cells[4].children[1].children[0].children[1].children[0].children[1].style.border =
        '2px solid cadetblue';
      this.counter = 1;
    } else if (this.counter === 1) {
      this.card.nativeElement.innerText = "Edit";
      console.log(this.card.nativeElement.parentElement.parentNode.cells[0].children[0].innerText)
      this.card.nativeElement.parentElement.parentNode.cells[0].children[0].innerText=this.card.nativeElement.parentNode.parentNode.cells[4].children[1].children[0].children[1].children[0].children[0].innerText
      const myText = this.card.nativeElement.parentNode.parentNode.cells[4].children[1].children[0].children[1].children[0].children[1].innerText;
      const a = this.card.nativeElement.parentNode.parentNode.cells[4].children[1].children[0].children[1].children[0].children[0].innerText;
      const b = this.datas.catId;
      const c = self.myService.rating + 1
      const d = parseInt(this.card.nativeElement.parentNode.parentNode.cells[1].children[0].innerText)
      const obj = { "name": a, "catId": b, "rating" : c, "description": myText,"cost" : d };
      this.myService.updateparticularItem(this.datas.id, obj).subscribe();
      this.card.nativeElement.parentNode.parentNode.cells[1].children[0].contentEditable = 'false';
      this.card.nativeElement.parentNode.parentNode.cells[4].children[1].children[0].children[1].children[0].children[0].contentEditable = 'false';
      this.card.nativeElement.parentNode.parentNode.cells[4].children[1].children[0].children[1].children[0].children[1].contentEditable = 'false';
      this.card.nativeElement.parentNode.parentNode.cells[1].children[0].style.border =
      'none';
      this.card.nativeElement.parentNode.parentNode.cells[4].children[1].children[0].children[1].children[0].children[0].style.border =
      'none';
      this.card.nativeElement.parentNode.parentNode.cells[4].children[1].children[0].children[1].children[0].children[1].style.border =
      'none';
      this.counter = 0;
      this.myService.sendnewItem();
      this.myService.setnewsubCart();
    }
    
  }
  

}
