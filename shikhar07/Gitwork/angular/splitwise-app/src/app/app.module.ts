import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MiddleSectionComponent } from './middle-section/middle-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptorService } from './token-interceptor.service';
import { EditComponent } from './edit/edit.component';
import { EditableComponent } from './editable/editable.component';

const appRoutes: Routes = [
  { path: 'editable/:id', component: EditableComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'form', component: FormComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MiddleSectionComponent,
    FooterSectionComponent,
    NavbarComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    FormComponent,
    EditComponent,
    EditableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
