import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  movies: any;
  isCollapsed: boolean= true;
  checkoutForm: FormGroup;


  constructor(private myservice: ApiserviceService, private activatedRoute: ActivatedRoute, private router: Router,  private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      genrename: ['',  [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z]*$')
      ]],
      Description: ['',  [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z]*$')
      ]]
    })
   }

  ngOnInit() {
    this.myservice.getCat().subscribe(res => {
      this.movies = res;
    });
  }
  delete(id) {
    this.myservice.deleteCat(id).subscribe();
    this.myservice.getCat().subscribe(res => {
      this.movies = res;
    });
  }
  toggle(){
    this.isCollapsed= !this.isCollapsed;
  }
  onSubmit() {
    if(this.checkoutForm.invalid)
    {
      return;
    }
    else{
    const genrename= this.checkoutForm.controls.genrename.value;
    const des= this.checkoutForm.controls.Description.value;
    const obj= {genre: genrename, desc: des};
    this.myservice.postCat(obj).subscribe();
    this.myservice.getCat().subscribe(res => {
      this.movies = res;
    });
    this.checkoutForm.reset();
  }

  }
}

