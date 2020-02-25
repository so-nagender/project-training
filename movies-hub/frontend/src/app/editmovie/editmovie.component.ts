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

  constructor(private checkout: FormBuilder, private activatedRoute: ActivatedRoute, private myservice: ApiserviceService) {
    this.id= (this.activatedRoute.snapshot.params.id);
   }
   checkoutForm= this.checkout.group({
    moviename : [''],
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
    onSubmit() {
      const moviename= this.checkoutForm.controls.moviename.value;
      const year= this.checkoutForm.controls.date.value;
      const category= this.checkoutForm.controls.cat.value;
      const cast= this.checkoutForm.controls.cast.value;
      const obj= {movieName: moviename, year: year, catId: category, ["cast"]: cast};
      this.myservice.update(this.id, obj).subscribe();
    }
}