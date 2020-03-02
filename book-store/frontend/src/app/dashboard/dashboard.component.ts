import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userlogindetail;
  carousleSlide = document.querySelector('.carousel-slide')
  carouseImages = document.querySelector('.carousel-slide img')


  //button

  prevBtn = document.querySelector('#prevBtn')
  nextBtn = document.querySelector('#nextBtn')
  constructor(private api : ApiService) { }

  ngOnInit() {

    

    this.userlogindetail= this.api.userdata.value;
    
  }
 

}
