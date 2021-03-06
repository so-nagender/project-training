import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { MainComponent } from "./main/main.component";
import { FooterComponent } from "./footer/footer.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Main2Component } from './main2/main2.component';
import { Sidebar2Component } from './sidebar2/sidebar2.component';
import { CategoryComponent } from './category/category.component';
import {TokenInterceptor} from './interceptor'
import { ResolverService } from './resolver.service';
import { AddformComponent } from './addform/addform.component';
import { ListComponent } from './list/list.component';
import { AdditemComponent } from './additem/additem.component';
import { CartComponent } from './cart/cart.component';
import { FilterdataPipe } from './filterdata.pipe'
import { ItemviewComponent } from './itemview/itemview.component';
import { ResolverItemsService} from './resolver-items.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeDisplayComponent } from './home-display/home-display.component';
import { ListEditDirective } from './list-edit.directive';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ResolverWelcomeService } from './resolver-welcome.service';
import { CookieService } from 'ngx-cookie-service';
import {NgxPaginationModule} from 'ngx-pagination';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: "",
    component: HomeDisplayComponent
  },
  {
    path: "home",
    component: HomeComponent,
    children: [
      {
        path: "",
        component: SidebarComponent
      },
      {
        path: "signup",
        component: SignUpComponent
      },
      {
        path: "signin",
        component: LoginComponent
      }
    ]
  },
  {
    path : "welcomescreen",
    component : HomeDisplayComponent,
    resolve : { data: ResolverWelcomeService }
  },
  {
    path: "categories",
    component: CategoryComponent,
    resolve: { data: ResolverService },
    children: [
      {
        path: "",
        component: SidebarComponent
      },
      {
        path: "addform",
        component: AddformComponent
      },
      {
        path: "cart",
        component: CartComponent
      }
    ]
  },
  {
    path: "items/category/:id",
    component: ItemviewComponent,
    resolve: { data: ResolverItemsService },
    children: [
      {
        path: "",
        component: SidebarComponent
      },
      {
        path: "additem",
        component: AdditemComponent
      },
      {
        path: "cart",
        component: CartComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
    SignUpComponent,
    HeaderComponent,
    Main2Component,
    Sidebar2Component,
    CategoryComponent,
    AddformComponent,
    ListComponent,
    AdditemComponent,
    CartComponent,
    FilterdataPipe,
    ItemviewComponent,
    HomeDisplayComponent,
    ListEditDirective,
    MainpageComponent,
  


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
