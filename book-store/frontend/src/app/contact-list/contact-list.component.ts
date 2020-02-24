import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
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
  apiBook;

  constructor(private api: ApiService ) {}  

  ngOnInit() {
    this.book();
  }
  book(){
    this.api.getBook().subscribe((res)=>{
      console.log(res);
      this.apiBook = res;
    });
  }
 
  

}
