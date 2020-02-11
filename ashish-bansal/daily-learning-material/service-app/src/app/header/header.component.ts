import { Component, OnInit } from '@angular/core';
import {FormsModule,ReactiveFormsModule,FormBuilder,FormGroup,Validators} from '@angular/forms'
import { TimeServiceService } from './../time-service.service'
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  todayTime;
  myList;
  a;
  b;
  datas;
  obj;
  
  

  constructor(private newtime : TimeServiceService,private newForm : FormBuilder,private https : HttpClient) { }
  myform = this.newForm.group({
    id : [''],
    movies : [''],
  })

  mydelete = this.newForm.group({
    id : [''],
  })

  

  ngOnInit() {
    this.todayTime = this.newtime.todayDate();
    this.newtime.getData().subscribe((res)=>{
      console.log(res);
      this.datas = res;
    });
}
  
  onSubmit(){
    this.a = this.myform.controls.id.value
    this.b = this.myform.controls.movies.value
    this.obj = { "name" : this.a ,"grade" : this.b}
    this.newtime.setValue(this.obj).subscribe();
    this.newtime.getData().subscribe((res)=>{
      this.datas = res;
    })
  }

  onDelete(){
    let x = this.mydelete.controls.id.value
    console.log(parseInt(x))
    this.newtime.deleteData(x).subscribe();
    this.newtime.getData().subscribe((res)=>{
      this.datas = res;
    })
  }

}
