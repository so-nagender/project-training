import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface DataTableItem {
  id: number;
  movieName: string;  
  year:number;
  cast:string;
  classification:string;
  rating:number;  
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTableItem[] = [
  {id: 1, movieName: 'Kuch Kuch Hota hai',year:1990,cast:'Shahrukh and Akshay',classification:'Romantic',rating:8.2},
  {id: 2, movieName: 'Kaho Na Pyar Hai',year:1992,cast:'Hrithik Roshan and Amisha Patel',classification:'Romantic',rating:7.8},
  {id: 3, movieName: 'Mohabbetein',year:1989,cast:'Shahrukh Khan , Amitabh Bachhan and Aishwarya',classification:'Romantic',rating:7.2},
  {id: 4, movieName: 'Dhamaal',year:1995,cast:'Sanjay Dutt,Arshad Warsi',classification:'Comedy',rating:8.1},
  {id: 5, movieName: 'Singham',year:1996,cast:'Ajay Devgan and Kareena kapoor ',classification:'Action',rating:8.2},
  {id: 6, movieName: 'Yaadein',year:1986,cast:'Amitabh Bachhan',classification:'Romantic',rating:8.4},
  {id: 7, movieName: 'Chalte-Chalte',year:1982,cast:'Rishi Kapoor',classification:'Romantic',rating:9.2},
  {id: 8, movieName: 'Kahaani',year:1980,cast:'Rajesh Khanna and Sharmila Tagore ',classification:'Romantic',rating:7.2},
  {id: 9, movieName: '1920 Evil Return',year:2009,cast:'Aftab Shivdasani and Tia Bajpai ',classification:'Thriller',rating:6.2},
  {id: 10, movieName: 'Bhoolbhulaiya',year:2006,cast:'Akshay Kumar and Vidya Balan',classification:'Thriller and Comedy',rating:6.9},
  {id: 11, movieName: 'Wanted',year:2007,cast:'Salman Khan and Aisha Takia',classification:'Action',rating:7.6},
  {id: 12, movieName: 'Dhol',year:2003,cast:'Rajpal Yadav ',classification:'Comedy',rating:7.8},
  {id: 13, movieName: 'Ghajni',year:2010,cast:'Amir Khan and Asin',classification:'Action',rating:8.7},
  {id: 14, movieName: 'Fast and Furious',year:2001,cast:'Dwayne Johnson',classification:'Action',rating:8.9},
  {id: 15, movieName: 'Titanic',year:2001,cast:'Kate Winslet and Lenardo Decaprio',classification:'Romantic',rating:6.4},
  {id: 16, movieName: 'War',year:2020,cast:'Hrithik Roshan and Tiger Shroff',classification:'Action',rating:7.7},
  {id: 17, movieName: 'Kabir Singh',year:2020,cast:'Shahid Kapoor',classification:'Romantic',rating:8.6},
  {id: 18, movieName: 'Housefull',year:2019,cast:'Akshay Kumar',classification:'Comedy',rating:8.2},
  {id: 19, movieName: 'Super 30',year:2019,cast:'Hrithik Roshan',classification:'Drama',rating:9.2},
  {id: 20, movieName: 'Mission Mangal',year:2019,cast:'Akshay Kumar and Vidya Balan',classification:'Drama',rating:7.0},
];

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableDataSource extends DataSource<DataTableItem> {
  data: DataTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DataTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: DataTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: DataTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'movieName': return compare(a.movieName, b.movieName, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'year': return compare(+a.year, +b.year, isAsc);
        case 'rating': return compare(+a.rating, +b.rating, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
