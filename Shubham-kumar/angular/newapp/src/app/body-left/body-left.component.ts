import { Component, OnInit, Pipe, PipeTransform } from "@angular/core";
import { books } from "../../data";
import { transformAll } from "@angular/compiler/src/render3/r3_ast";
@Component({
  selector: "app-body-left",
  templateUrl: "./body-left.component.html",
  styleUrls: ["./body-left.component.css"]
})
export class BodyLeftComponent implements OnInit {
  book = books;
  constructor() {}
  shouldShowBookDetails = false;
  selectedbooks;
  ngOnInit() {}

  createRange(num) {
    let items: number[] = [];
    for (let i = 1; i <= num; i++) {
      items.push(i);
    }
    return items;
  }

  showDetails(value) {
    this.shouldShowBookDetails = true;
    this.selectedbooks = value;
  }

showMainList() {
  this.shouldShowBookDetails = false;
}
}




// interface operation {
//   (input: string, chars?: string): string;
// }

// // function transform(): operation;
// //  camelize(str) {

// //   let text:string[]=[];

// //       let  new_string:string =str.split(' ')
// //      // get rid of any extra spaces using trim
// //      .map(a => a.trim())
// //      // Convert first char to upper case for each word
// //      .map(a => a[0].toUpperCase() + a.substring(1))
// //      // Join all the strings back together
// //      .join("")
// // }
// function t(input: string, chars?: string): string {
//   return ''
// }
// t('')