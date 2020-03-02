import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators} from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id;
  formData;
  apiBook;
  a;
  apiBook2;
  apiBook1;
  submitted = false;

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute, private http: HttpClient, private formBuilder: FormBuilder,private router: Router) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
   }

  ngOnInit() {
   this.formValue();
   this.book();
  }
  get u() {
    return this.formData.controls;
  }
  onUpdate() {
    this.submitted = true;
    if (this.formData.invalid) {
      return;
    } else {
    const BookName = this.formData.controls.bookname.value;
    const AuthorName = this.formData.controls.authorname.value;
    const CatName = this.formData.controls.catname.value;
    const BookDes = this.formData.controls.des.value;
    const BookPrice = this.formData.controls.bookprice.value;
    const BookDiscount = this.formData.controls.bookdiscount.value;
    const obj = { "BookName" : BookName , "AuthorName" : AuthorName, "catogrieId" : CatName, "description" : BookDes, "BookPrice" : BookPrice, "discount" : BookDiscount };
    this.api.updateBook(obj , this.id).subscribe();
    this.book();
    this.router.navigate(['/book/view', this.id])
    }
  }

  book(){
    this.api.getBookDetail(this.id).subscribe((res)=>{
      this.apiBook = res;
    });
    this.api.getCatDetail(this.id).subscribe((res)=>{
      this.apiBook1 = res;
    });
    this.api.getCatogery().subscribe((res)=>{
      this.apiBook2 = res;
    });
  }


  formValue() {
    this.formData = this.formBuilder.group({
      bookname: ['',Validators.required],
      authorname: ['',Validators.required],
      catname: ['',Validators.required],
      des: ['',Validators.required],
      bookprice: ['', Validators.required],
      bookdiscount: ['', Validators.required]
    });
  }

  stars(x) {
    let item: number[] =[];
    for(let i=1; i<=x; i++)
    {
      item.push(i);
    }
    return item;
  }

}
