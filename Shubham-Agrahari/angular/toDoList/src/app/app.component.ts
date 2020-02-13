import {Component} from '@angular/core';
import { MyDataService } from './my-data.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
    
constructor(private myservice: MyDataService,private http: HttpClient) {}
teams$
 ngOnInit(){
 this.teams$=this.myservice.data()
 this.teams$.subscribe((res)=>{
      console.log(res);
    });    
  }  
}
