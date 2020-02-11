import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
​import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MiddleSectionComponent } from './middle-section/middle-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [AppComponent, HeaderComponent, MiddleSectionComponent, FooterSectionComponent, NavbarComponent, SignUpComponent, SignInComponent, HomeComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule,  RouterModule.forRoot(appRoutes), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
