import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators,} from '@angular/forms';
import { ApiService } from '../api.service';
import { Router} from '@angular/router'

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  formData;
  apiBook;
  apiBook1;
  apiBook2;
  submitted = false;
  bookDataArr = [];

  constructor(private api: ApiService, private http: HttpClient, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.formValue();
    this.book();
  }

  get u() {
    return this.formData.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.formData.invalid) {
      return;
    } else {
    const BookName = this.formData.controls.bookname.value;
    const AuthorName = this.formData.controls.authorname.value;
    const CatName = this.formData.controls.catname.value;
    const BookDes = this.formData.controls.des.value;
    const BookPrice = this.formData.controls.bookprice.value;
    const BookDiscount = this.formData.controls.discount.value;
    const BookRating = this.formData.controls.rating.value;
    const obj = { "BookName" : BookName , "AuthorName" : AuthorName, "catogrieId" : CatName, "description" : BookDes, "BookPrice" :  BookPrice, "BookDiscount" : BookDiscount, "BookRating" : BookRating};
    const apihit =this.api.addBook(obj).subscribe((res)=>{this.bookDataArr.push(res)
  
    }
    );
   
    }
  }

  book(){
    this.api.getCatogery().subscribe((res)=>{
      this.apiBook2 = res;
    });
  }
  
  formValue() {
    this.formData = this.formBuilder.group({
      bookname: ['',[Validators.required,Validators.pattern('^[-a-zA-Z\s]+([-a-zA-Z]+)*$')]],
      authorname: ['',[Validators.required,Validators.pattern('^[-a-zA-Z\s]+([-a-zA-Z]+)*$')]],
      catname: ['',[Validators.required,]],
      des: ['',Validators.required],
      bookprice: ['',[Validators.required,Validators.min(0)]],
      discount: ['',[Validators.required,Validators.min(0)]],
      rating: ['',[Validators.required,Validators.min(0)]]
    });
  }

}
