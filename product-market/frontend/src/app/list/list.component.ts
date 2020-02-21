import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductcatchService} from '../productcatch.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  datas: any;

  constructor(private activatedRoute: ActivatedRoute,private serve : ProductcatchService  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.datas = data.data;
    });
  }

  onClose(data){
    const x = data.id;
    const catId = data.categoryId
    this.serve.deleteItem(x).subscribe();
    this.serve.getItems(catId).subscribe(data => {
      this.datas = data;
    });
  }

}
