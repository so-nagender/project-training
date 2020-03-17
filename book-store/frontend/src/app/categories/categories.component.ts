import { Component, OnInit,ViewChild, ElementRef, } from '@angular/core';
import {TimelineMax} from "gsap";
import { FormGroup, FormControl, Validators } from "@angular/forms"
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {
  id;
  view_form = false
  @ViewChild('category_form', {static: true}) category_form: ElementRef;
  categoryFormdata: any;
  Hascatdata= false;
  catdata: any;
  toggle_form() {
    this.view_form = true
  }

  constructor(private api : ApiService , public routes : Router, private activatedRoute: ActivatedRoute) { 
    this.id = this.activatedRoute.snapshot.params.id;
  }

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
    Swal.fire({
      title: 'Yeah...',
      text: "Categorie Added"
    })
    this.view();
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

  close(){
   this.view_form=false;
  }

 onDeleteCat(x){
  const id = x;
  this.api.deleteCat(id).subscribe();
  this.api.deleteCatBook(id).subscribe();
  Swal.fire({
    title: 'Deleted',
    text: "Categorie Deleted "
  })
  this.view();
 }
 
}
