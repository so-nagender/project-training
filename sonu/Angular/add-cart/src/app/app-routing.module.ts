import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { format } from 'url';
import { DetailFormComponent } from './detail-form/detail-form.component'
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';



const routes: Routes = [
  {path:'home/:id', component: HomeComponent },
  {path:'app',component: AppComponent},
  {path:'detail-form/:id',component:DetailFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
