import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    SecondSecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
