import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {ProductcatchService} from '../productcatch.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  datas: any;
  id : any;

  constructor(private activatedRoute: ActivatedRoute,private serve : ProductcatchService,private router : Router ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.datas = data.data;
      this.datas.forEach( item => item.rating = parseInt(item.rating));
      console.log(this.activatedRoute.snapshot.params.id)
    });
    this.serve.getnewItem().subscribe(() => {
      const varId = this.activatedRoute.snapshot.params.id
      this.serve.getItems(varId).subscribe(res => {
      this.datas = res;
      this.datas.forEach( item => item.rating = parseInt(item.rating));
    });});
  }

  onClose(data){
    const x = data.id;
    const catId = data.categoryId
    this.serve.deleteItem(x).subscribe();
    this.serve.getItems(catId).subscribe(data => {
      this.datas = data;
    });
  }

  onaddItem(){
    this.router.navigate(['additem'],{relativeTo :this.activatedRoute})
  }

}
