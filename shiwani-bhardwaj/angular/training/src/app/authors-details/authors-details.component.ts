import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-authors-details',
  templateUrl: './authors-details.component.html',
  styleUrls: ['./authors-details.component.css']
})
export class AuthorsDetailsComponent implements OnInit {
  @Input()
  Authors;
 

  constructor() { }

  ngOnInit() {
  }

}
