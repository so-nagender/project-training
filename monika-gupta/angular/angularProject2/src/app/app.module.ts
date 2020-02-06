import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OnscreenComponent } from './onscreen/onscreen.component';
import { BannerComponent } from './banner/banner.component';
import { BodyComponent } from './body/body.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SingUpHeaderComponent } from './sing-up-header/sing-up-header.component';
import { SingInHeaderComponent } from './sing-in-header/sing-in-header.component';
import { SingInBodyComponent } from './sing-in-body/sing-in-body.component';
import { SingUpBodyComponent } from './sing-up-body/sing-up-body.component';
import { HomeComponent } from './home/home.component';
import { FirstDirDirective } from './first-dir.directive';

const appRoutes: Routes = [
  { path: 'Sign-up', component: SignUpComponent },
  { path: 'Sign-in', component: SignInComponent },
  { path: '', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OnscreenComponent,
    BannerComponent,
    BodyComponent,
    SignUpComponent,
    SignInComponent,
    SingUpHeaderComponent,
    SingInHeaderComponent,
    SingInBodyComponent,
    SingUpBodyComponent,
    HomeComponent,
    FirstDirDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
