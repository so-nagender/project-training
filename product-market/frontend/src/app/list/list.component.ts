import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductcatchService } from '../productcatch.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  datas: any;
  id: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private serve: ProductcatchService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.datas = data.data;
      this.datas.forEach(item => (item.rating = parseInt(item.rating,10)));
      console.log(this.datas);
    });
    this.serve.getnewItem().subscribe(() => {
      const varId = this.activatedRoute.snapshot.params.id;
      this.serve.getItems(varId).subscribe(res => {
        this.datas = res;
        this.datas.forEach(item => (item.rating = parseInt(item.rating,10)));
      });
    });
  }

  onClose(param) {
    const x = param.id;
    const catId = param.categoryId;
    this.serve.deleteItem(x).subscribe();
    this.serve.getItems(catId).subscribe(param => {
      this.datas = param;
    });
  }

  onaddItem() {
    this.router.navigate(['additem'], { relativeTo: this.activatedRoute });
  }

  onaddCart(data) {
    const obj = {
      name: data.name,
      rating: data.rating,
      cost: data.cost,
      description: data.description
    };
    this.serve.addCart(obj).subscribe();
    this.serve.setnewsubCart();
  }
}
