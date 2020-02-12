import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MidPartComponent } from './mid-part/mid-part.component';
import { MidPart2Component } from './mid-part2/mid-part2.component';
import { HttpClientModule } from '@angular/common/http';
import { TeamComponent } from './team/team.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InterceptComponent } from './intercept/intercept.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './intercept';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MidPartComponent,
    MidPart2Component,
    TeamComponent,
    InterceptComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
