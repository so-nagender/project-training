import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';


@Component({
  selector: 'app-editmovie',
  templateUrl: './editmovie.component.html',
  styleUrls: ['./editmovie.component.css']
})
export class EditmovieComponent implements OnInit {
  id;
  dataa: any;
  catogry: any;
  update= false;
  moviename;
  year;
  category;
  cast;
  obj;

  constructor(private checkout: FormBuilder, private activatedRoute: ActivatedRoute, private myservice: ApiserviceService) {
    this.id= (this.activatedRoute.snapshot.params.id);
   }
   checkoutForm= this.checkout.group({
    movienm : [''],
    date : [''],
    cat: [''],
    cast: [''],
  })

  ngOnInit() {
    this.getDataa();
    this.getCategory();
  }
  getDataa(){
    this.myservice.getSingleElementById(this.id).subscribe((res) =>{
      this.dataa = res;
      })
    }
    getCategory() {
      this.myservice.getCat().subscribe((res) => {
        this.catogry = res;
      });
    }
    updateDataa() {
      this.update= true;
      this.moviename= this.checkoutForm.controls.movienm.value;
      this.year= this.checkoutForm.controls.date.value;
      this.category= this.checkoutForm.controls.cat.value;
      this.cast= this.checkoutForm.controls.cast.value;
      this.obj= {"Movie name": this.moviename, "Year": this.year, "Category": this.category, "Cast": this.cast};
      this.myservice.updateData(this.id, this.obj).subscribe();
      this.getDataa();
    }
}