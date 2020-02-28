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
    const obj = { "BookName" : BookName , "AuthorName" : AuthorName, "catogrieId" : CatName, "description" : BookDes };
    console.log(obj)
    this.api.addBook(obj).subscribe();
    console.log(CatName)
    this.api.getBookDetail(CatName).subscribe()
    this.book();
    // this.router.navigate(['viewbook'])
    }
  }

  book(){
    this.api.getCatogery().subscribe((res)=>{
      this.apiBook2 = res;
    });
  }
  
  formValue() {
    this.formData = this.formBuilder.group({
      bookname: ['',Validators.required],
      authorname: ['',Validators.required],
      catname: ['',Validators.required],
      des: ['',Validators.required]
    });
  }

}
