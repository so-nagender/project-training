import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent implements OnInit {
  addform: FormGroup;

  constructor(private fb: FormBuilder) { }
  get f() { return this.addform.controls; }

  ngOnInit() {
    this.addform = this.fb.group({
        name: ['', [Validators.required]],
        item: ['', [Validators.required]],
    });
}
}