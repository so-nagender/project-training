import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MidPartComponent } from './mid-part/mid-part.component';
import { MidPart1Component } from './mid-part1/mid-part1.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SplitDirective } from './split.directive';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const appRoutes: Routes = [
  { path: 'sign-up', component:SignUpComponent},
  { path: "", component:HomeComponent},
  { path: 'home', component:HomeComponent},
  { path: 'sign-in', component:SignInComponent},
  { path: 'movie-detail', component:MovieDetailComponent},]
@NgModule({
  declarations: [AppComponent, HeaderComponent, MidPartComponent, MidPart1Component, FooterComponent, SignUpComponent, HomeComponent, SignInComponent, SplitDirective, MovieDetailComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule,ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
