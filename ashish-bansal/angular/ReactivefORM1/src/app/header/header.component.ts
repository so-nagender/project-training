import { Component, OnInit } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {FormControl,FormGroup} from '@angular/forms'
import {FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  checkoutForm;
  // FormGroup Class
  profileForm = new FormGroup({
    firstName : new FormControl(''),
    lastName : new FormControl('')
  });
  
  constructor(private fb : FormBuilder) { 
      this.checkoutForm = this.fb.group({
        name : '',
        address : ''
    }) 
  }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  onSave(){
    console.log(this.checkoutForm.value)
  }

}
