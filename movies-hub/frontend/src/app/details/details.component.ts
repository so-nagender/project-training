import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  data: any;
  id:any

  constructor(private activatedRoute: ActivatedRoute, private myservice: ApiserviceService) {
    this.id = this.activatedRoute.snapshot.params.id;
   }

  ngOnInit() {
    this.myservice.getSingleElementById(this.id).subscribe((res) =>{
      this.data= res;
    });
  }
}
