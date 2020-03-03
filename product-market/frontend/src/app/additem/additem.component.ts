import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductcatchService } from "../productcatch.service";

@Component({
  selector: "app-additem",
  templateUrl: "./additem.component.html",
  styleUrls: ["./additem.component.css"]
})
export class AdditemComponent implements OnInit {
  itemform: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private serve: ProductcatchService
  ) {
    this.id = this.activatedRoute.snapshot[
      "_routerState"
    ]._root.children[0].value.params.id;
  }
  get f() {
    return this.itemform.controls;
  }
  id: any;
  ngOnInit() {
    this.itemform = this.fb.group({
      item: ["", [Validators.required]],
      rating: ["", [Validators.required]],
      cost: ["", Validators.required],
      Description: ["", [Validators.required]]
    });
  }

  onClose() {
    const url = `items/category/${this.id}`;
    this.router.navigate([url]);
  }
  onSubmit() {
   
    if (this.itemform.invalid) {
      return;
    }
    else{
    const url = `items/category/${this.id}`;
    console.log(this.itemform.controls.item)
    const obj = {
      name: this.itemform.controls.item.value,
      catId: parseInt(this.id),
      rating: this.itemform.controls.rating.value,
      description: this.itemform.controls.Description.value,
      cost: this.itemform.controls.cost.value
    };
 
    this.serve.postItem(obj).subscribe();
    this.serve.sendnewItem();
    this.router.navigate([url]);
  }
  }
}




