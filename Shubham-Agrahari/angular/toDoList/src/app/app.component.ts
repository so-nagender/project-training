import {Component} from '@angular/core';
import { MyDataService } from './my-data.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {    

constructor(private myservice: MyDataService) {}
teams$
 ngOnInit(){
 this.teams$=this.myservice.data()
 this.teams$.subscribe((res)=>{
      console.log(res);
    });
  }  
}
