import { Component, OnInit } from '@angular/core';
import {MovieserviceService} from '../movieservice.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  movie: any;
  moviename:any;
  teams$ 
  result: any;
  SERVER_URL = "http://localhost:3000/banner";
  loginForm: FormGroup;
  constructor(private movieservice: MovieserviceService,private http: HttpClient,private formBuilder: FormBuilder ) {}
  onSubmit(){
      id: this.loginForm.controls.id.value
      movie: this.loginForm.controls.movies.value
      this.http.post<any>(this.SERVER_URL, this.loginForm).subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );
  }   
  ngOnInit() {
    this.movie = this.movieservice.movie();
    this.movieservice.getMovies().subscribe((res:any)=> { 
    this.result = res;
    this.loginForm = this.formBuilder.group({
      id: [''],
      movies:['']
    });
     

  });
}
}