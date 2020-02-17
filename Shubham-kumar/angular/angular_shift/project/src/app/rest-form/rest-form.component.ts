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
  url2 : any;
  button= false;
  userVal={
    "name" : '',
    "id " : '',
    'coach' : ''


  };
  SelectedData = false;
  user_detail = false;

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
    this.http.post(this.url, this.postData).toPromise().then(data=>{
      console.log(data)
      this.postVal(data)
    });
    
    // this.url2="/api/teams/"+obj.id;
    // this.data.subscribe((res:any)=> {this.myData= res; console.log("------------------<<<<<<ffffffff<<<<<<<<<>..............",this.myData)});
    // this.http.get(this.url2).subscribe((value:any)=> {this.userVal = value });
    // this.SelectedData = true;
    // this.Edit_toggle = false;
    
  }



  
 change_toggle(){

  if (this.Edit_toggle== true)
  {
     this.Edit_toggle = false ;
     this.button = false
     this.SelectedData = false
  }
  else if(this.Edit_toggle == false)
  {
     this.Edit_toggle = true
     this.button = false
     this.SelectedData = false
     this.view_data();
  }
  else
    console.log("toggle undefined ")

}
  view_data(){
    
    this.data = this.list.MovieList()
    this.data.subscribe((res:any)=> {this.myData= res});
    }
    delval (id){

      
      this.url2="/api/teams/"+id;
      // this.http.get(this.url2).toPromise().then(data=>{console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!",data)});
      this.http.delete(this.url2).toPromise().then(data=>{});
 
    }

  updval (obj ){
      //  this.url2="/api/teams/"+obj.id
      console.log('obj==>', obj.value);
      this.url2="/api/teams/"+obj.value.id;
      console.log('this.url2===>', this.url2);
      this.http.put( this.url2, obj.value ).toPromise().then(data=>{});
      this.http.get(this.url2).subscribe((value:any)=> { });

     }

  editVal(obj) {
    this.button = true;
    console.log('object edit==>', obj);
  //   console.log(obj.id)
    this.profileForm = new FormGroup({
      id: new FormControl(obj.id),
      name: new FormControl(obj.name),
      coach: new FormControl(obj.coach),
      description: new FormControl(obj.description),
    });
  
    this.Edit_toggle = false; 
    
  
  
  //  this.updval(obj)
  }
  postVal(obj){
    debugger;
    this.url2="/api/teams/"+obj.id;
    this.data = this.list.MovieList()
    this.data.subscribe((res:any)=> {this.myData= res});
    this.http.get(this.url2).subscribe((value:any)=> {this.userVal = value });
    this.SelectedData = true;
    this.Edit_toggle = false;
    
    

  }
  ngOnInit() {
 
 
    
  }

  

   
}
