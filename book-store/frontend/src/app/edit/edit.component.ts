import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder} from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute, private http: HttpClient, private formBuilder: FormBuilder) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
   }

  ngOnInit() {
   this.formValue();
   this.book();
  }
  onUpdate() {
    const BookName = this.formData.controls.bookname.value;
    const AuthorName = this.formData.controls.authorname.value;
    const CatName = this.formData.controls.catname.value;
    const BookDes = this.formData.controls.des.value;
    const obj = { "BookName" : BookName , "AuthorName" : AuthorName, "catogrieId" : CatName, "description" : BookDes };
    console.log(obj)
    this.api.updateBook(obj , this.id).subscribe();
    this.book();
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
      bookname: [''],
      authorname: [''],
      catname: [''],
      des: ['']
    });
  }

}
