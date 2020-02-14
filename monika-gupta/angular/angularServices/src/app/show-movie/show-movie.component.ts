import { Component, OnInit } from '@angular/core';
import { MyServicesService } from '../my-services.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.css']
})
export class ShowMovieComponent implements OnInit {
  id;
  apiTeam;

  constructor(
    private http: HttpClient,
    private myservice: MyServicesService,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getTeams();
  }

  getTeams() {
    console.log(this.id);
    this.myservice.getMovie(this.id).subscribe(res => {
      console.log(res);
      this.apiTeam = res;
    });
  }
}
