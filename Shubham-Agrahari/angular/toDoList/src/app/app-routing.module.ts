import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { MyTeamComponent } from './my-team/my-team.component';

const routes: Routes = [
  { 
    path: 'signup',component: SignupComponent
  },
  { 
    path: 'signin',component: SigninComponent
  },
 {
   path:"",component:HomeComponent
 },
  {
  path:"home",component:HomeComponent
 },
{
  path:"teams/edit-form/:id",component:MyTeamComponent
}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
