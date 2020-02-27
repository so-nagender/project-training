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
      genrename: ['']
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
    const genrename= this.checkoutForm.controls.genrename.value;
    const obj= {genre: genrename};
    this.myservice.postCat(obj).subscribe();
    this.myservice.getCat().subscribe(res => {
      this.movies = res;
    });
    this.checkoutForm.reset();

  }
}

