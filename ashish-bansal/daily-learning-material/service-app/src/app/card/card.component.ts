import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {TimeServiceService} from '../time-service.service'


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  constructor(private myData : TimeServiceService,private activatedRoute: ActivatedRoute) {
    
   }
  
  datas : any;
  
  ngOnInit() {
    let id = this.activatedRoute.snapshot.params.id;
    this.myData.getdataId(id).subscribe((res)=>{
      console.log(res);
      this.datas = res;
    });
  }

}
