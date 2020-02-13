import { Component, OnInit } from '@angular/core';
import {TimeServiceService} from '../time-service.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {


  constructor(private movielist : TimeServiceService,private newForm : FormBuilder) { }

  datas : any;

  myform = this.newForm.group({
    movie : ['',Validators.required],
    genre : ['',Validators.required],
    description : ['',Validators.required]
  })

  ngOnInit() {
    this.movielist.getData().subscribe((res)=>{
      this.datas = res;
    });
  }
  

  onClick(movie){
    this.movielist.id = movie.id
  }
  onDelete(movie){
    let x = movie.id
    this.movielist.deleteData(x).subscribe();
    this.movielist.getData().subscribe((res)=>{
      this.datas = res;
    });
  }
  
  get f() { return this.myform.controls; }

  onSubmit(){
    if (this.myform.invalid) {
      return;
    }
    else{
    let name = this.myform.controls.movie.value;
    let genre = this.myform.controls.genre.value;
    let description = this.myform.controls.description.value;
    let obj = {"movie" : name,"genre" : genre,"description" : description};
    this.movielist.setValue(obj).subscribe();
    this.movielist.getData().subscribe((res)=>{
      this.datas = res;
    })
  }
}

}
