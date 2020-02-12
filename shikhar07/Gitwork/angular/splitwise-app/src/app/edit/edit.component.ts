import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  data;
  constructor(private activatedRoute: ActivatedRoute, private movies : MoviesService) {
    
    
  }

   

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params.id;
    this.movies.getdataId(id).subscribe((res)=>{
      this.data = res;
    });
  }

}
