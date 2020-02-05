import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

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
}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
