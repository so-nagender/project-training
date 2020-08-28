import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ProductcatchService } from "../productcatch.service";

@Component({
  selector: "app-addform",
  templateUrl: "./addform.component.html",
  styleUrls: ["./addform.component.css"]
})
export class AddformComponent implements OnInit {
  addform: FormGroup;
  isSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private serve: ProductcatchService
  ) {}
  get f() {
    return this.addform.controls;
  }

  ngOnInit() {
    this.addform = this.fb.group({
      name: ["", [Validators.required,Validators.pattern('^[^\s]+[-a-zA-Z\s]+([-a-zA-Z]+)*$')]],
      Description: ["", [Validators.required]],
    });
  }
  datas: any;
  onSubmit() {
    this.isSubmitted = true;
    console.log("this.addform>>>>>>>>>>>", this.addform);
    if (this.addform.invalid) {
      console.log("agsvhadsbhaggjhghggu")
      return;
    } else {
      const name = this.addform.controls.name.value;
      const item = this.addform.controls.Description.value;
      const obj = { name: name, description: item };
      this.serve.postValue(obj).subscribe();
      this.serve.getData().subscribe(res => {
        this.datas = res;
      });
      this.serve.sendMessage(this.datas);
      this.router.navigate(["/categories"]);
    }
  }

  onClose() {
    this.router.navigate(["/categories"]);
  }
  
  isFirstError(element) {
    let firstErrorControlName;
    console.log(this.addform.controls)
    let controls = this.addform.controls;
    Object.keys(controls).map((key) => {
        if(!firstErrorControlName) {
          firstErrorControlName = controls[key].errors && Object.keys(controls[key].errors).length ? key : '';
          this.isSubmitted = false;
        }     
    });
    console.log(element === firstErrorControlName ?true:false)
    return element ===firstErrorControlName ?true:false;
  }
}
