import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { FirstDirective } from './first.directive';
import { SetdataComponent } from './setdata/setdata.component';
import { GetdataComponent } from './getdata/getdata.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FresolverService } from './fresolver.service';
import { Interceptor } from './interceptor';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

// Routing Valiables...
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'setdata', component: SetdataComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'view/:id', component: ViewComponent },
  {
    path: 'getdata',
    component: GetdataComponent,
    resolve: { users: FresolverService }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    SigninComponent,
    FirstDirective,
    SetdataComponent,
    GetdataComponent,
    EditComponent,
    ViewComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes), HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
