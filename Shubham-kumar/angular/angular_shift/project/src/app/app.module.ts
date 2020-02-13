import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { PreviewComponent } from './preview/preview.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { ColorDirective } from './color.directive';
import { ListComponent } from './list/list.component';
import { ListServiceService } from './list-service.service';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptor';
import { RestFormComponent } from './rest-form/rest-form.component';
import { RestViewComponent } from './rest-view/rest-view.component';
import { RestComponent } from './rest/rest.component';
const appRoutes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'home', component: PreviewComponent },
  { path: 'list', component: ListComponent },
  { path: 'rest', component: RestComponent },
  { path: 'rest/form', component: RestFormComponent },
  { path: 'rest/view', component: RestViewComponent }
 
 
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    PreviewComponent,
    SignInComponent,
    SignUpComponent,
    ColorDirective,
    ListComponent,
    RestFormComponent,
    RestViewComponent,
    RestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ListServiceService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
