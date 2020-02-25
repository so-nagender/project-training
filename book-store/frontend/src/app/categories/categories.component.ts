import { Component, OnInit,ViewChild, ElementRef, } from '@angular/core';
import {TimelineMax, TweenMax} from "gsap";
import { FormGroup, FormControl, Validators } from "@angular/forms"
import { ApiService } from '../api.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  view_form = false
  @ViewChild('category_form', {static: true}) category_form: ElementRef;
  categoryFormdata: any;
  Hascatdata= false;
  catdata: any;

   toggle_form() {
    this.view_form = true
  }

  constructor(private api : ApiService , public routes : Router) { }
  animation() {
    let t1: TimelineMax = new TimelineMax();
    t1.fromTo(this.category_form, 5,{x:"-100%"},
    {x:"0%", ease:Power2.easeInOut}) 
  }
 
  categoryForm = new FormGroup({
    bookname: new FormControl('', Validators.required),
    bookdescription: new FormControl('', Validators.required)
  })

  onSubmit(form){
    this.view_form=false;
    this.api.postbookcategories(form)
  }
  view(){
    this.api.Viewdatacategories().subscribe(catformdata=>{this.categoryFormdata = catformdata;
  
    if(this.categoryFormdata!= null){
      this.Hascatdata = true;
      console.log(this.categoryFormdata)
  
    }
  });
  }
 
  retrivedata(id){
    this.api.retrivedata(id).subscribe(data=>{this.catdata = data;console.log('catlist',this.catdata)
    this.routes.navigate(['/contactlist'])
    console.log('data to be sent',this.catdata)
  })
 
  }
  senddata(id){
    this.api.sendata(id)
  }
 
  ngOnInit() {
    this.view();
  }

}
