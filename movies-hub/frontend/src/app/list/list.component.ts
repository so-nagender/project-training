import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

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
  catg: any;
  result: any;
  username = this.cookieService.get('Test');
  
  // collection = [];
  constructor(private myservice: ApiserviceService, private activatedRoute: ActivatedRoute, private router: Router, private cookieService: CookieService) {
    let id = this.activatedRoute.snapshot.params.id;
    // for(let i=1;i<=100;i++){
    //   let Obj = {'name': `Employee Name ${i}`,'code': `EMP00 ${i}`}
    //   this.collection.push(Obj);
    //   }
  }

  ngOnInit() {
    this.getMovies();
  }
  getMovies() {
    this.myservice.getMovies().subscribe(res => {
      this.movies = res;
      this.result = this.movies;
    });
    return this.result;
  }
  getCatById() {
    this.myservice.getData().subscribe(id => {
      this.catid = id;
      this.myservice.getMoviesByCatg(this.catid).subscribe(res => {
        this.catg = res.genre;
        this.movies = res.movies;
      });
    });
  }
  getMovieBySubject() {
    this.myservice.getDataT().subscribe(response => {
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
  // Get Elements by its category

  getMovieArrayFromW() {
    // let arr = []
    //  this.myservice.getWatchList().subscribe((res) => {
    //   const temp = res;
    //   for(let i =0;i<temp.length;i++) {
    //     if(this.username == temp[i].user) {
    //       arr.push(temp[i].movieId);
    //     } 
    //   }
    // })
  }

  // ADD TO WATCH LIST START
add() {alert("Saved")}

  // add(id) {
  //   console.log("and id",id);
    

  //   let arr = [];
  //    this.myservice.getWatchList().subscribe((res) => {
  //     const temp = res;
  //     for(let i =0;i<temp.length;i++) {
  //       if(this.username == temp[i].user) {
  //         for(let j=0; j<temp[i].movieId.length ;j++){
  //           arr[j] = temp[i].movieID[j];
  //         }
  //         console.log(arr);
  //       } 
  //     }
  //     console.log("movie array -- before add",arr)
  //     console.log("After add array",arr);
  //     const obj = {user: this.username, movieId: [id] };
  //     console.log("Obj ------",obj);
  //   })
    

    // this.myservice.getSingleElementById(id).subscribe((response) => {
    //   this.movies.push(response);
    //   const temp = response;
    //   console.log(temp.movieName);
    // });
  // }
  // ADD TO WATCH LIST END


  getCategory() {
    this.myservice.getCat().subscribe((res) => {
      this.catogry = res;
    });
  }
  // Sorting By Movie Names
  sortTableAsc() {
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
  sortTableDes() {
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
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {

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
  // Sorting By Year
  sortTableYearAsc() {
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
        x = rows[i].getElementsByTagName("TD")[1];
        y = rows[i + 1].getElementsByTagName("TD")[1];

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
  sortTableYearDes() {
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
        x = rows[i].getElementsByTagName("TD")[1];
        y = rows[i + 1].getElementsByTagName("TD")[1];

        // Check if 2 rows need to be switched 
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {

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
  createRange(num) {
    const items: number[] = [];
    for (let i = 1; i <= num; i++) {
      items.push(i);
    }
    return items;
  }
}
