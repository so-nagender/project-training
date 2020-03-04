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
  total = 5;
  selected = 0;
  totalArray: number[] = [];

  constructor(private api: ApiService, private http: HttpClient, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    
    this.formValue();
    this.book();

    for (let i = 0; i < this.total; i++) {
      this.totalArray.push(i + 1);
    }
    console.log(this.totalArray);

  
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
    const BookRating = this.selected;
    const obj = { "BookName" : BookName , "AuthorName" : AuthorName, "catogrieId" : CatName, "description" : BookDes, "BookPrice" :  BookPrice, "discount" : BookDiscount, "Rating" : BookRating};
    const apihit =this.api.addBook(obj).subscribe((res)=>{this.bookDataArr.push(res)
    this.formData.reset();
    }
    );

   
    }
  }

  book(){
    this.api.getCatogery().subscribe((res)=>{
      this.apiBook2 = res;
    });
  }
  reset(){
    this.formData.reset();
    this.selected = 0 
  }
  
  formValue() {
    this.formData = this.formBuilder.group({
      bookname: ['',[Validators.required]],
      authorname: ['',[Validators.required]],
      catname: ['',[Validators.required,]],
      des: ['',Validators.required],
      bookprice: ['',[Validators.required,Validators.min(0)]],
      discount: ['',[Validators.required,Validators.min(0)]],
      rating: ['',]
    });
  }
  // arrinsatll(){
  //   for (let i = 0; i < this.TotalRating; i++) {
  //     this.Ratingarr.push(i + 1);
  //   }
  //   console.log('here-->>',this.Ratingarr);
  // }
  
 
  starSelected(val) {
    this.selected = val;
    console.log(this.selected);
    return this.selected
  }


}