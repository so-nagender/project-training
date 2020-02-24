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

  constructor(private activatedRoute: ActivatedRoute, private myservice: ApiserviceService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params.id;
    this.myservice.getSingleElementById(id).subscribe((res) =>{
      this.data= res;
      console.log(this.data);
    });
  }
}
