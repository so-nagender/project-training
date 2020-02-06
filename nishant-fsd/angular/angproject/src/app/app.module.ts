import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { SignInComponent } from './sign-in/sign-in.component';

const appRoutes: Routes = [
  { path: 'form', component: FormComponent },
  {path:'sign-in',component:SignInComponent}
];
@NgModule({
  declarations: [AppComponent, HeaderComponent, BannerComponent, FooterComponent, FormComponent, SignInComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule,ReactiveFormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
