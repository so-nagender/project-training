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
  }
  getDataa(){
    this.myservice.getSingleElementById(this.id).subscribe((res) =>{
      this.dataa = res;
      })
    }
}
