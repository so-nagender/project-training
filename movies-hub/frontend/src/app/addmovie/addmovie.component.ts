import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {

  public value: string;
  checkoutForm: FormGroup;
  catogry: any;
  constructor(private router: Router, private formBuilder: FormBuilder, private myservice: ApiserviceService, private activatedRoute: ActivatedRoute, private route: Router) {
    this.checkoutForm = this.formBuilder.group({
      moviename: ['', Validators.required],
      date: ['', Validators.required],
      rating:[''],
      cat: ['', Validators.required],
      cast: ['', Validators.required],
      syn: ['', Validators.required],


    });
  }

  ngOnInit() {
    this.getCategory();
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
    const temp = this.toggle();
    console.log("temp working",temp);
    // const rating= this.checkoutForm.controls.rating.value;
    const cast= this.checkoutForm.controls.cast.value;
    const synopsys = this.checkoutForm.controls.syn.value;
    const obj= {movieName: moviename, year: year,rating: temp, catId: category, ["cast"]: [cast], synopsis: synopsys};
    this.myservice.postData(obj).subscribe();
    this.route.navigate(['/list']);
    }
  }

  rating = new FormControl(null, [Validators.required]);
  

  toggle() {
    if (this.rating.disabled) {
      this.rating.enable();
    } else {
      this.rating.disable();
    }    
    return this.rating.value;
    
  }

}
