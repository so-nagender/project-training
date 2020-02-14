import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-setdata',
  templateUrl: './setdata.component.html',
  styleUrls: ['./setdata.component.css']
})
export class SetdataComponent implements OnInit {
  data: FormGroup;
  team: any;
  coachName: any;
  description: any;

  constructor(
    private FormBuilderObj: FormBuilder,
    private Myser: MyserviceService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.data = this.FormBuilderObj.group({
      team: ['', Validators.required],
      coachName: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  get f() {
    return this.data.controls;
  }
  onSubmit() {
    this.team = this.data.controls.team.value;
    this.coachName = this.data.controls.coachName.value;
    this.description = this.data.controls.description.value;
    if (this.data.invalid) {
      alert('Form is empty');
      return;
    } else {
      // if Form is valid then it will post the data into the JSON server...
      this.Myser.postData({ name: this.team, coach: this.coachName, description: this.description }).subscribe();
    }
  }
}
