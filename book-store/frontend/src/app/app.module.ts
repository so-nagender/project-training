import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { FormsModule } from '@angular/forms'
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms'
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpResponse } from '@angular/common/http';
import { TokenInterceptor } from './TokenInterceptor';
import { DashboardComponent } from './dashboard/dashboard.component'

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    CategoriesComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
   
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
