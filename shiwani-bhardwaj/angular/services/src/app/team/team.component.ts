import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../movieservice.service';
import { FormBuilder, Validators } from '@angular/forms';




@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  submitted = false;
  data: any;
  myData: any;
  obj: any;
  obj1: any;
  user_id: any;
  id: any;
  myform: any;

  constructor(private movieservice: MovieserviceService, private fb: FormBuilder) { }
  
  
  ngOnInit() {
    this.myform = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      address: ['', Validators.required],
    })
    this.movieservice.teams().subscribe((res: any) => {
      this.myData = res;
    });
  }
  get f() { return this.myform.controls; }
  onSubmit() {
    let x = this.myform.controls.first_name.value;
    let y = this.myform.controls.last_name.value;
    let z = this.myform.controls.address.value;
    this.obj = { "name": x, "coach": y, "address": z }
      if (this.myform.invalid) {
        alert("invalid form");
        console.log(this.myform);
        return;
      } else {
        console.log("ghajsdhajh")
        this.movieservice.setValue(this.obj).subscribe();
      }
      alert('sucessfully filled');
      this.movieservice.teams().subscribe((res: any) => {
        this.myData = res;
    });
    this.submitted = true;
  }
  value_delete(value) {
    this.movieservice.delete(value).subscribe();
    this.movieservice.teams().subscribe((res: any) => {
      this.myData = res;
    });
  }
}









