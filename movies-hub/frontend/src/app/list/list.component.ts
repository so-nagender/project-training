
import {Component, OnInit} from '@angular/core';
export interface Book {
  movie_Name: string;
  year: number;
  cast: string;
  classification: string;
  rating: number
  
}

 const books: Book[] = [
  {
    movie_Name: "Kuch Kuch Hota Hai",
    year: 1998,
    cast: 'Jaswant',
    classification: "Romantic",
    rating: 8,
    
  },
  {
    movie_Name: "Ram Seeta",
    year: 2000,
    cast: 'Katrina',
    classification: "Romantic",
    rating: 8,   
  },
  {
    movie_Name: "Kuch Kuch Hota Hai",
    year: 1998,
    cast: 'Jaswant',
    classification: "Romantic",
    rating: 8,
    
  },
  {
    movie_Name: "Kuch Kuch Hota Hai",
    year: 1998,
    cast: 'Jaswant',
    classification: "Romantic",
    rating: 8,
    
  },
  {
    movie_Name: "Kuch Kuch Hota Hai",
    year: 1998,
    cast: 'Jaswant',
    classification: "Romantic",
    rating: 8,
    
  },
  {
    movie_Name: "Kuch Kuch Hota Hai",
    year: 1998,
    cast: 'Jaswant',
    classification: "Romantic",
    rating: 8,
    
  },
  {
    movie_Name: "Kuch Kuch Hota Hai",
    year: 1998,
    cast: 'Jaswant',
    classification: "Romantic",
    rating: 8,
    
  }
];
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  books=books;
  constructor() { }

  ngOnInit() {
  

  }


 
}
