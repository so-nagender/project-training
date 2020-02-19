import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { DefaultComponent } from './default/default.component'
import { FooterComponent } from './footer/footer.component'
import { from } from 'rxjs';
import { SignupComponent } from './signup/signup.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { EditmovieComponent } from './editmovie/editmovie.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { FormsModule }   from '@angular/forms';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: DefaultComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'details', component: DetailsComponent},
  { path: 'edit', component: EditmovieComponent},
  { path: 'add', component: AddmovieComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DefaultComponent,
    FooterComponent,
    SignupComponent,
    DetailsComponent,
    ListComponent,
    EditmovieComponent,
    AddmovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
