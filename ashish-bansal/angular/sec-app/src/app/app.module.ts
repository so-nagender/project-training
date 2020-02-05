import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeBarComponent } from './home-bar/home-bar.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FooterComponent } from './footer/footer.component';
import { SecondFirstComponent } from './second-first/second-first.component';
import { SecondSecondComponent } from './second-second/second-second.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';



const appRoutes: Routes = [
  { path: 'sign-up', component: SignUpFormComponent },
  { path: 'sign-in', component: SignInFormComponent },
  { path: 'second', component: SecondComponent },
  { path: '', component: HomeComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    NavBarComponent,
    HomeBarComponent,
    SecondComponent,
    ThirdComponent,
    FooterComponent,
    SecondFirstComponent,
    SecondSecondComponent,
    SignUpFormComponent,
    HomeComponent,
    SignInFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,ReactiveFormsModule,RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
