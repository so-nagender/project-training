import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", component: HomeComponent },
];

import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Main2Component } from './main2/main2.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    FooterComponent,
    SidebarComponent,

    LoginComponent,
    SignUpComponent,
    HeaderComponent,
    Main2Component,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
