import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollegeDetailComponent } from './college-detail/college-detail.component';
import { AdmissionsComponent } from './admissions/admissions.component';


const routes: Routes = [];
//     {path:'college-detail',component:CollegeDetailComponent},
    
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
