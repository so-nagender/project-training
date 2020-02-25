import { Component, OnInit } from '@angular/core';
import { ProductcatchService } from '../productcatch.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private serve: ProductcatchService, private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('accessToken')) {
      this.router.navigate(['/categories']);
    }
  }
}
