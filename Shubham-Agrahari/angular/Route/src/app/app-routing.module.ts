import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import{ SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { 
    path: 'sign-up',component: SignUpComponent 
  },
  { 
    path: 'sign-in',component: SignInComponent 
  },
 
  { 
    path: "home",component:HomeComponent  
  },

  // { 
  //   path: 'home', component: HomeComponent 
  // }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
