import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-display',
  templateUrl: './home-display.component.html',
  styleUrls: ['./home-display.component.css']
})
export class HomeDisplayComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {
    this.route.navigate(['/home']);
  }
}
