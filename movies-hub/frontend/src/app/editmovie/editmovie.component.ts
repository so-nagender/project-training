import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-editmovie',
  templateUrl: './editmovie.component.html',
  styleUrls: ['./editmovie.component.css']
})
export class EditmovieComponent implements OnInit {
  checkoutForm: FormGroup;
  id;
  dataa: any;
  catogry: any;

  constructor(private checkout: FormBuilder, private activatedRoute: ActivatedRoute, private myservice: ApiserviceService, private route: Router) {
    this.id= (this.activatedRoute.snapshot.params.id);
   
   this.checkoutForm= this.checkout.group({
    moviename : ['', [Validators.required]],
    date : ['', Validators.required],
    cat: ['',Validators.required],
    rating:['',[Validators.required,Validators.max(5)]],
    cast: ['', Validators.required],
    syn: ['', [Validators.required]]
  })
}

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
      if(this.checkoutForm.invalid)
      {
        return;
      }
      else{
      const moviename= this.checkoutForm.controls.moviename.value;
      const year= this.checkoutForm.controls.date.value;
      const category= this.checkoutForm.controls.cat.value;
      const rating= this.checkoutForm.controls.rating.value;
      const cast= this.checkoutForm.controls.cast.value;
      const synopsys = this.checkoutForm.controls.syn.value;
      const obj= {movieName: moviename, year: year, catId: category,rating:rating, cast: [cast], synopsis: synopsys};
      this.myservice.update(this.id, obj).subscribe();
      this.route.navigate(['/list']);
     }  
    }
  }
