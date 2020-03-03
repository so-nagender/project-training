import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductcatchService } from '../productcatch.service';

@Component({
  selector: 'app-home-display',
  templateUrl: './home-display.component.html',
  styleUrls: ['./home-display.component.css']
})
export class HomeDisplayComponent implements OnInit {
  datas: any;
  constructor(private route: Router,private activatedRoute: ActivatedRoute,private serve : ProductcatchService) {}

  ngOnInit() {
    if (localStorage.getItem('accessToken')) {
      this.activatedRoute.data.subscribe(data => {
        this.datas = data.data;
        console.log(this.datas)
      });
    } else {
      console.log("my")
      this.route.navigate(['/home']);
    }
  }
}
