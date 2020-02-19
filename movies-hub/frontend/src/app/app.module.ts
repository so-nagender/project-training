import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { DefaultComponent } from './default/default.component'
import { FooterComponent } from './footer/footer.component'
// import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Confirmpasswordvalidator } from '../../src/app/match'
import { SignupComponent } from './signup/signup.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: DefaultComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'details', component: DetailsComponent}
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
    Confirmpasswordvalidator
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
