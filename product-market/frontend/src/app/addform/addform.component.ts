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
      item: ["", [Validators.required,Validators.pattern('^[^\s]+[-a-zA-Z\s]+([-a-zA-Z]+)*$')]],
      Description: ["", [Validators.required]]
    });
  }
  datas: any;
  onSubmit() {
    if (this.addform.invalid) {
      return;
    } else {
      const name = this.addform.controls.name.value;
      const item = this.addform.controls.item.value;
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
}
