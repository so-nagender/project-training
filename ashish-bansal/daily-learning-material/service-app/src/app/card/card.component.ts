import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TimeServiceService } from '../time-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  constructor(
    private myData: TimeServiceService,
    private activatedRoute: ActivatedRoute
  ) {}
  color: number;
  datas: any;

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.datas = data.data;
      this.color = this.datas.id;
    });
  }
}
