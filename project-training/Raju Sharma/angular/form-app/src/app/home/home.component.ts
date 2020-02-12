import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // teams$: Observable<any>
  todaydate: Date;
  movieDetails: object;
  api: any;

  constructor(private Myser: MyserviceService, private http: HttpClient) { }

  ngOnInit() {
    this.todaydate = this.Myser.todayDate();
    this.movieDetails = this.Myser.movieList();
    this.Myser.teams().subscribe((res)=>{
      // console.log(res);
      this.api = res;
    });
  
  }
 
}
