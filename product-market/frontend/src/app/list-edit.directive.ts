import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import {ProductcatchService} from './productcatch.service';
import { ActivatedRoute } from '@angular/router';

@Directive({
  selector: '[appListEdit]'
})
export class ListEditDirective {

  constructor(private card: ElementRef,private myService: ProductcatchService,private activatedRoute: ActivatedRoute) { }
  @Input('first') myid: any;
  datas: any;
  counter = 0;

  @HostListener('click') onClick() {
    this.clicked();
  }
  clicked(){
    if (this.counter === 0) {
      console.log(this.counter);
      this.card.nativeElement.previousSibling.contentEditable = 'true';
      this.myService.getParticularItem(this.myid).subscribe(res => {
        this.datas = res;
        console.log(this.datas)
      });
      this.card.nativeElement.previousSibling.style.border =
        '2px solid cadetblue';
      this.counter = 1;
    } else if (this.counter === 1) {
      const myText = this.card.nativeElement.previousSibling.innerText;
      const a = this.datas.name;
      const b = this.datas.categoryId;
      const c = this.datas.rating;
      const d = this.datas.cost;
      const obj = { "name": a, "categoryId": b, "rating" :c, "description": myText,"cost" : d };
      this.myService.updateparticularItem(this.myid, obj).subscribe();
      this.card.nativeElement.previousSibling.contentEditable = 'false';
      this.card.nativeElement.previousSibling.style.border = 'none';
      this.counter = 0;
    }
  }
}
