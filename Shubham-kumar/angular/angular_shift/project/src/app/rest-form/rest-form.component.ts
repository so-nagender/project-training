import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ListServiceService } from '../list-service.service';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-rest-form',
  templateUrl: './rest-form.component.html',
  styleUrls: ['./rest-form.component.css'],
  providers : [ListServiceService]
})


export class RestFormComponent implements OnInit {
  profileForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    coach: new FormControl(''),
    description: new FormControl(''),
  });
  data: any;
  myData:any;
  postData:any
  Edit_toggle: boolean =false ;
  url ="/api/teams/"
  url2 : any

  constructor( private formBuilder: FormBuilder,
              private list : ListServiceService, 
               private http:HttpClient) { }
 
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm);
    this.postData={
      
      "name": this.profileForm.value.name,
      "coach": this.profileForm.value.coach,
      "description": this.profileForm.value.description
    };
    this.http.post(this.url, this.postData).toPromise().then(data=>{console.log(data)});
  }
  view_data(){
    console.log("----------------<<<<<<<<<<<>>>>>>>>>>>yes")
    this.data = this.list.MovieList()
    this.data.subscribe((res:any)=> {this.myData= res; console.log("------------------<<<<<<ffffffff<<<<<<<<<>..............",this.myData)});
    }
    delval (id ){

      
      this.url2="/api/teams/"+id;
      // this.http.get(this.url2).toPromise().then(data=>{console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!",data)});
      this.http.delete(this.url2).toPromise().then(data=>{console.log(data)});
      console.log("_____<<<<<<>>>>>>>>>>>---------<<<<<<<>>>>>>>>>>delted")
    }

  updval (obj ){
      //  this.url2="/api/teams/"+obj.id
      console.log('obj==>', obj.value);
      this.url2="/api/teams/"+obj.value.id;
      console.log('this.url2===>', this.url2);
      this.http.put( this.url2, obj.value ).toPromise().then(data=>{console.log(data)});
     }

  editVal(obj) {
    console.log('object edit==>', obj);
  //   console.log(obj.id)
    this.profileForm = new FormGroup({
      id: new FormControl(obj.id),
      name: new FormControl(obj.name),
      coach: new FormControl(obj.coach),
      description: new FormControl(obj.description),
    });
    
  //  this.updval(obj)

  }

  edit(){
      
  }
  ngOnInit() {
 
 
    
  }

  
    
  
  
  postVal(){
    this.http.post(this.url, this.postData).toPromise().then(data=>{console.log(data)});
   }

   
}
