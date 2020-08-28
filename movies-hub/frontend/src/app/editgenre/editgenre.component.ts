import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editgenre',
  templateUrl: './editgenre.component.html',
  styleUrls: ['./editgenre.component.css']
})
export class EditgenreComponent implements OnInit {
  checkoutForm: FormGroup;
  catogry: any;
  id;
  constructor(private checkout: FormBuilder, private activatedRoute: ActivatedRoute, private myservice: ApiserviceService, private route: Router) { 
    this.id = this.activatedRoute.snapshot.params.id;
    this.checkoutForm= this.checkout.group({
      genr : ['', [Validators.required]],
      description : ['', Validators.required],
    })
  }
  

  ngOnInit() {
    this.getCategory();
  }
  getCategory() {
    this.myservice.getCatById(this.id).subscribe((res) => {
      this.catogry = res;
      console.log(this.catogry)
    });
  }
  onSubmit() {
    if(this.checkoutForm.invalid)
    {
      return;
    }
    else{
    const genres= this.checkoutForm.controls.genr.value;
    const describe= this.checkoutForm.controls.description.value;
    const obj= {genre: genres, desc: describe};
    this.myservice.updateCat(this.id, obj).subscribe();
    this.route.navigate(['/Genres']);
    }
    
  }

}
