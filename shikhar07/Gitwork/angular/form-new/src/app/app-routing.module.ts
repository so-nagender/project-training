import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NextpageComponent } from './nextpage/nextpage.component';


const routes: Routes = [    
  { path: '', component: AppComponent },  
  { path: 'second', component: NextpageComponent }, 
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
