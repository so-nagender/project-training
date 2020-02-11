import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
const appRoutes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'home', component: PreviewComponent },
  { path: 'list', component: ListComponent }
 
 
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
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ListServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
