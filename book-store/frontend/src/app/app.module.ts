import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { FormsModule } from '@angular/forms'
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms'
import { LoginComponent } from './login/login.component';
import { FilterPipe } from '../filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { CookieService } from 'ngx-cookie-service';

import { HttpClientModule, HTTP_INTERCEPTORS, HttpResponse } from '@angular/common/http';
import { TokenInterceptor } from './TokenInterceptor';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { AddbookComponent } from './addbook/addbook.component';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { EditCatComponent } from './edit-cat/edit-cat.component';
import { ViewCatComponent } from './view-cat/view-cat.component';
import { CartComponent } from './cart/cart.component'


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    CategoriesComponent,
    SignupComponent,
    LoginComponent,
    FilterPipe,
    DashboardComponent,
    FooterComponent,
    ViewComponent,
    EditComponent,
    AddbookComponent,
    ViewbookComponent,
    EditCatComponent,
    ViewCatComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatInputModule,
    NgxPaginationModule

   
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,
    
  },
  CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
