import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { FirstDirective } from './first.directive';
import { SetdataComponent } from './setdata/setdata.component';
import { GetdataComponent } from './getdata/getdata.component';
import { HttpClientModule } from '@angular/common/http';
import { FresolverService } from './fresolver.service';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'setdata', component: SetdataComponent },
  { 
    path: 'getdata', 
    component: GetdataComponent,
    resolve: { users: FresolverService }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    SigninComponent,
    FirstDirective,
    SetdataComponent,
    GetdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, RouterModule.forRoot(
      appRoutes,
    ),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
