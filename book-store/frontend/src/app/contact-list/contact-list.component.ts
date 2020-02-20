import { Component, OnInit } from '@angular/core';
import { CARS } from '../../cars'


interface Car {
  brand: string;
  model: string;
  year: number;
}


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  
  cars: Car[] = CARS;
  searchText: string;

  constructor() {}  

  ngOnInit() {
  }
  
 
  

}
