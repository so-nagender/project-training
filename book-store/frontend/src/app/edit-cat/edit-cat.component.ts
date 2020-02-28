import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators} from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router'

@Component({
  selector: 'app-edit-cat',
  templateUrl: './edit-cat.component.html',
  styleUrls: ['./edit-cat.component.css']
})
export class EditCatComponent implements OnInit {
  formData;
  id;
  submitted: boolean;
  apiCat;

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute, private http: HttpClient, private formBuilder: FormBuilder,private router: Router) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.formValue();
    this.Cat();
  }
  formValue() {
    this.formData = this.formBuilder.group({
      catname: ['',Validators.required],
      des: ['',Validators.required]
    });
  }
  get u() {
    return this.formData.controls;
  }

  onUpdateCat() {
    this.submitted = true;
    if (this.formData.invalid) {
      return;
    } else {
    const CatName = this.formData.controls.catname.value;
    const CatDes = this.formData.controls.des.value;
    const obj = { "title" : CatName, "description" : CatDes };
    this.api.updateCat(obj , this.id).subscribe();
    this.Cat();
    this.router.navigate(['/categories'])
    }
  }

  Cat(){
    this.api.getCatDetailEdit(this.id).subscribe((res)=>{
      this.apiCat = res;
    });
    
  }


}
