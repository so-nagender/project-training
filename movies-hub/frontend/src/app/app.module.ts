import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { DefaultComponent } from './default/default.component'
import { FooterComponent } from './footer/footer.component'
// import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Confirmpasswordvalidator } from '../../src/app/match'
import { SignupComponent } from './signup/signup.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { EditmovieComponent } from './editmovie/editmovie.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from '../app/interceptor';
import { DataResolverService } from './data-resolver.service';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    resolve: {
      hero: DataResolverService
    }
  },
  { path: '', component: DefaultComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'details/:id',
    component: DetailsComponent,
    resolve: {
      hero: DataResolverService
    }
  },
  { 
    path: 'edit', 
    component: EditmovieComponent,
    resolve: {
      hero: DataResolverService
    }
   },
  { 
    path: 'add', 
    component: AddmovieComponent,
    resolve: {
      hero: DataResolverService
    }
   },
  { 
    path: 'list', 
    component: ListComponent,
    resolve: {
      hero: DataResolverService
    }
   }

];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DefaultComponent,
    FooterComponent,
    SignupComponent,
    DetailsComponent,
    ListComponent,
    EditmovieComponent,
    AddmovieComponent,
    Confirmpasswordvalidator
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,

    FormsModule,

    RouterModule.forRoot(
      appRoutes,
    ),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
