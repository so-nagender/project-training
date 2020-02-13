import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { format } from 'url';
import { DetailFormComponent } from './detail-form/detail-form.component'
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'home/:id', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
