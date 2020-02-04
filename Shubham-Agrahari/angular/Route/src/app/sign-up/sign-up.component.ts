import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
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
