import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyLeftComponent } from './body-left/body-left.component';
import { BodyRightComponent } from './body-right/body-right.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import {DirectDirective}  from './direct.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyLeftComponent,
    BodyRightComponent,
    FooterComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    DirectDirective
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
