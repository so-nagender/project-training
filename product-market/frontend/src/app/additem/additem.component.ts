import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  itemform: FormGroup;
  constructor(private fb: FormBuilder) { }
  get f() { return this.itemform.controls; }

  ngOnInit() {
    this.itemform = this.fb.group({
        item: ['', [Validators.required]],
        choose:['',[Validators.required]],
        rating:['', [Validators.required]],
        Description:['', [Validators.required]],
    });
      
}
}
