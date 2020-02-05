import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {
  // author = {
  //   name: 'Raju Sharma',
  //   DOB: '07-24-1960',
  //   country:'India',
  //   bio: "Lorem ipsum dolor sit,amet consectetur adipisicing elit. Repellat esse ullam unde minima commodi! Fugit autem obcaecati molestiae. Laudantium alias odio numquam corrupti facere, sint quasi sed veniam? Sequi, corporis.",
  //   books: ['Half', 'The Train']
  // };
  @Input()
  authors;
  constructor() {}

  ngOnInit() {}
}
