import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MyserviceService {
  http: any;
  url =  '/api/teams';
  constructor(private httpClient: HttpClient) { }

  // getStudent():Observable<any>    
  // {    
  //   return this.http.get<any>(this.url, );    
  // }    
  // CreateStudent(OutletVM:any):Observable<any>    
  // {    
  //  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };    
  //   return this.http.post<any>(this.url + 'api/teams', OutletVM, httpOptions)    
  // }    
  // DeleteStudent(StudentId:string):Observable<number>    
  // {    
  //   return this.http.get<number>(this.Url + '/student/DeleteStudent?Id='+StudentId);    
  // }    
  // getStudentById(StudentId: string): Observable<StudentVM> {    
  //   return this.http.get<StudentVM>(this.Url + '/student/GetStudentById?Id=' + StudentId);    
  // }
  
  public getMovies(){
    return this.httpClient.get("api/teams");
  }

  display(){
    return 'Total Item';
  }

  getHeroes(){
    return [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
    ];
  }
}
