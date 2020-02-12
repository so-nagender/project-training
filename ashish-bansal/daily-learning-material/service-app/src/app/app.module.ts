import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { TokenInterceptor } from './interceptor';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { MainComponent } from './main/main.component';


const appRoutes: Routes = [
  { path: 'details/:id', component: CardComponent },
  { path: '', component: MainComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    CardComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
