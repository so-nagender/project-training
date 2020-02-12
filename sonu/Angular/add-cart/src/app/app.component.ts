import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

function food(value){
  this.value=value;
}
food.prototype.add=function(){
  this.value ++;

}
food.prototype.sub=function(){  
  this.value --;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyserviceService]
})

export class AppComponent {
  teams$: Observable<any> = this.http.get('/api/teams');
  title = 'add-cart';
  Pizza={value: 0};
  Burger={value: 0};
  text: string;
  hero: any;
  myservice: any;
  id= 4;
  url =  '/api/teams';
  url3 = `/api/teams/${this.id}`
 
  add(food) {
    food.value ++;
  }
  sub(food) {
    if(food.value>0 )
    {
    food.value --;
    }
    else
    return;
  }
  postData={
    'test': 'my content'
  }
  // teams$ = this.http.get('/api/teams');
  constructor(private _heroservice: MyserviceService,private http: HttpClient ){}

  public ping() {
    this.http.get('https://example.com/api/things')
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );
  }
  
  ngOnInit(){
    // this.teams$.subscribe((value:any)=>{
    //   console.log('result is',value)
    // })
    this._heroservice.getMovies().subscribe((res)=>{
      console.log(res);
    });
    // this.http.post(this.url, this.postData).toPromise().then((data:any)=>{
    //   console.log(data);
    // });
    this.http.delete(this.url3).toPromise().then((data:any)=>{
      console.log(data);
    });
    this.hero=this._heroservice.getHeroes();
    this.text=this._heroservice.display();
  }
}