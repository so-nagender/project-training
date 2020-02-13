import { Directive,ElementRef, Input, HostListener } from '@angular/core';
import {TimeServiceService} from './time-service.service'
import { ActivatedRoute } from '@angular/router';
import { JsonpClientBackend } from '@angular/common/http';

@Directive({
  selector: '[appEditDetails]'
})
export class EditDetailsDirective {

  constructor(private card : ElementRef,private myService : TimeServiceService,private activatedRoute: ActivatedRoute) { }
  
  @Input('first') myid: any ;
  datas : any;


  @HostListener('click') onClick(){
    this.clicked()
  }

  @HostListener('dblclick') ondblclicked(){
    this.dblclicked()
  }

  clicked(){
    this.card.nativeElement.previousSibling.contentEditable = "true"
    this.myService.getdataId(this.myid).subscribe((res)=>{
      this.datas = res;
    });
    this.card.nativeElement.previousSibling.style.border = "2px solid cadetblue"
  }

  dblclicked(){
    let myText = this.card.nativeElement.previousSibling.innerText
    let a = this.datas.movie
    let b = this.datas.genre
    let obj = { "movie" : a ,"genre" : b, "description" : myText}
    this.myService.updateValue(this.myid,obj).subscribe();
    this.card.nativeElement.previousSibling.contentEditable = "false"
    this.card.nativeElement.previousSibling.style.border = "none"
}

}
