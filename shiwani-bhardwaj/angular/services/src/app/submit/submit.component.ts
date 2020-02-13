import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../movieservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
  id;

  constructor(private movieservice : MovieserviceService,private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params.id;
   }
  myData: any;

  ngOnInit() {
  console.log(this.id);
  this.movieservice. getdataId(this.id).subscribe((res:any)=> {
    this.myData= res;
  });
  }
 



  

}




  