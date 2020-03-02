import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators} from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router'

@Component({
  selector: 'app-view-cat',
  templateUrl: './view-cat.component.html',
  styleUrls: ['./view-cat.component.css']
})
export class ViewCatComponent implements OnInit {
  id;
  apiCat;
  apiBook;

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute, private http: HttpClient, private formBuilder: FormBuilder,private router: Router) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.Cat();
   
  }

  Cat(){
    this.api.getCatDetailEdit(this.id).subscribe((res)=>{
      this.apiCat = res;
    }); 
    this.api.getCatBook(this.id).subscribe((res)=>{
      this.apiBook =res;
    }); 
  }

  onDelete1(x) {
    const id = x;
    this.api.deleteTeams(id).subscribe();
    this.Cat();
  } 
  stars(x) {
    let item: number[] =[];
    for(let i=1; i<=x; i++)
    {
      item.push(i);
    }
    return item;
  }



}
