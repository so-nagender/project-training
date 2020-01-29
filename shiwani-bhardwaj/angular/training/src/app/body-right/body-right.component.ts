import { Component, OnInit } from '@angular/core';
import { Author_details} from '../../data'

@Component({
  selector: 'app-body-right',
  templateUrl: './body-right.component.html',
  styleUrls: ['./body-right.component.css']
})
export class BodyRightComponent implements OnInit {
  toggle=false;
  selectedAuthor:any;
  Author=Author_details
  constructor() { }

  ngOnInit() {
  }
  
   toggleSetter()
   {
     if (this.toggle)
     {
       this.toggle=false;
     }
     this.toggle=true;
   }
   showdetails(value)
   {
    this.selectedAuthor=value;
    this.toggle=true;
   }
  createRange(num)
  {
    let items:number[]=[];
    for (let i=1;i<=num;i++)
    {
      items.push(i);
    }
    return items;
  }
}
