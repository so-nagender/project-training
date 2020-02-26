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
import { ContactListComponent } from './contact-list/contact-list.component';
import { FilterPipe } from '../filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactTableComponent } from './contact-table/contact-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';

import { HttpClientModule, HTTP_INTERCEPTORS, HttpResponse } from '@angular/common/http';
import { TokenInterceptor } from './TokenInterceptor';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { AddbookComponent } from './addbook/addbook.component';
import { ViewbookComponent } from './viewbook/viewbook.component'


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    CategoriesComponent,
    SignupComponent,
    LoginComponent,
    ContactListComponent,
    FilterPipe,
    ContactTableComponent,
    DashboardComponent,
    FooterComponent,
    ViewComponent,
    EditComponent,
    AddbookComponent,
    ViewbookComponent
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
    MatInputModule
   

   
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
