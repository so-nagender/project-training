import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CategoriesComponent } from './categories/categories.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
