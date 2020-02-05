import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  checkoutForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder
    ){ 
    debugger; 
    this.checkoutForm = this.formBuilder.group({      
        
        
        email: ['', [Validators.required, Validators.email]], 
        password: ['', Validators.required],            
        
    }); 
  }

  ngOnInit() {
  }

}
