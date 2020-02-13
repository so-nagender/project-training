import { Component, OnInit } from '@angular/core';
import { MyServicesService } from '../my-services.service';
import { HttpClient } from '@angular/common/http';

class Post {
  constructor(
    public id: number,
    public name: string,
    public description: string
  ) { }
}


@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent implements OnInit {
  todaydate;
  apiTeam;
  data=[];

  constructor(private http: HttpClient, private myservice: MyServicesService) { }
  ngOnInit() {
    this.todaydate = this.myservice.todayDate();
    this.getMovie();
  }

  deleteMovie(x){
    let id = x;
    this.myservice.deleteTeams(id).subscribe();
    this.getMovie();
  }

  getMovie() {
    const promise = new Promise((resolve, reject) => {
      const url = `/api/teams`;
      this.http
        .get(url)
        .toPromise()
        .then((res: any) => {
          // Success
          this.data = res.map((res) => {
            return new Post(
              res.id,
              res.name,
              res.description
            );
          });
          console.log(this.data);
          resolve();
        },
          err => {
            // Error
            reject(err);
          }
        );
    });
    return promise;
    
  }
}
