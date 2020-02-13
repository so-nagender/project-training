import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Router } from '@angular/router'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  datas;
  id;
  constructor(private movies : MoviesService, private router :  Router, private activatedRoute: ActivatedRoute) {
    let id = this.activatedRoute.snapshot.params.id;
   }
   ngOnInit() {
    this.movies.getData().subscribe((res)=>{
    this.datas = res;
  });
} 
  onDelete(x){
    this.movies.deleteData(x).subscribe();
    this.movies.getData().subscribe((res)=>{
      this.datas = res;
    });
  }
}


