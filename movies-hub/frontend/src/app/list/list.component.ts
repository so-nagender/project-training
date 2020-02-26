import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  movies: any;
  movieID: string;
  cat: any;
  catid: any;
  catogry: any;
  constructor(private myservice: ApiserviceService, private activatedRoute: ActivatedRoute, private router: Router) {
    let id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.movies = data.movies;
    });
    this.myservice.getMovies().subscribe(res => {
      this.movies = res;
    });
    this.myservice.getData().subscribe(id => {
      this.catid = id;
      console.log(this.catid);
      this.myservice.getMoviesByCatg(this.catid).subscribe(res => {
        this.movies = res.movies;
        console.log(res.movies)
      });
    });
    this.myservice.getDataT().subscribe(response =>{
      this.myservice.getMovies().subscribe(res => {
        this.movies = res;
      })
    })

  }
  delete(id) {
    this.myservice.deleteMovie(id).subscribe();
    this.myservice.getMovies().subscribe(res => {
      this.movies = res;
    });
  }

  getCategory() {
    this.myservice.getCat().subscribe((res) => {
      this.catogry = res;
    });
  }
  sortTable() {
    console.log("Sort Table is Working")
    var table, i, x, y;
    table = document.getElementById("table");
    var switching = true;

    // Run loop until no switching is needed 
    while (switching) {
      switching = false;
      var rows = table.rows;

      // Loop to go through all rows 
      for (i = 1; i < (rows.length - 1); i++) {
        var Switch = false;

        // Fetch 2 elements that need to be compared 
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];

        // Check if 2 rows need to be switched 
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {

          // If yes, mark Switch as needed and break loop 
          Switch = true;
          break;
        }
      }
      if (Switch) {
        // Function to switch rows and mark switch as completed 
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
}
