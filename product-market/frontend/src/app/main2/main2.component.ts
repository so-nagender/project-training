import { Component, OnInit } from '@angular/core';
import { ProductcatchService } from '../productcatch.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main2',
  templateUrl: './main2.component.html',
  styleUrls: ['./main2.component.css']
})
export class Main2Component implements OnInit {
  itemName: any;
  constructor(
    private serve: ProductcatchService,
    private activatedRoute: ActivatedRoute
  ) {}
  datas: any;
  itemx : any;
  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.datas = data.data;
    });
    this.serve.getMessage().subscribe(() => {
      this.serve.getidData().subscribe(res => { 
        this.datas = res;
      });
    });
  }

  onClose(data) {
    
    const x = data.id;
    this.serve.deleteData(x).subscribe();
    this.serve.getidData().subscribe(res => {
      this.datas = res;
    });
  }

}
