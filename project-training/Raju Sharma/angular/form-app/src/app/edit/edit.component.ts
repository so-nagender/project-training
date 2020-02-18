import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  data: FormGroup;
  team: any;
  coachName: any;
  description: any;
  users: any;
  teamID: string;

  constructor(
    private FormBuilderObj: FormBuilder,
    private Myser: MyserviceService,
    private activatedRoute: ActivatedRoute
  ) {
    this.teamID = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.setDefaultValue();
    this.Myser.getSingleElementById(this.teamID).subscribe(res => {
      this.users = res;
    });
  }

  setDefaultValue() {
    this.data = this.FormBuilderObj.group({
      team: [''],
      coachName: [''],
      description: ['']
    });
  }
  onSubmit() {
    const teamName = this.data.controls.team.value;
    const coachName = this.data.controls.coachName.value;
    const teamDescription = this.data.controls.description.value;
    const obj = { name: teamName, coach: coachName, description: teamDescription };
    this.Myser.update(this.teamID, obj).subscribe();
  }
}
