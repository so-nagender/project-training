import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CategoriesComponent } from './categories/categories.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { AddbookComponent } from './addbook/addbook.component';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { EditCatComponent } from './edit-cat/edit-cat.component';
import { ViewCatComponent } from './view-cat/view-cat.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'login', component: LoginComponent , data : {animation :'isRight'} },
  { path: 'signup', component: SignupComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'book/view/:id', component: ViewComponent},
  { path: 'book/edit/:id', component: EditComponent},
  { path: 'addbook', component: AddbookComponent},
  { path: 'viewbook', component: ViewbookComponent},
  { path: 'categorie/edit/:id', component: EditCatComponent},
  { path: 'categorie/book/:id', component: ViewCatComponent },
  { path: 'cart', component: CartComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
