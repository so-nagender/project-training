import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptor';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { EditDetailsDirective } from './edit-details.directive';
import { ResolverService } from './resolver.service';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  {
    path: 'details/:id',
    component: CardComponent,
    resolve: { data: ResolverService }
  },
  { path: '', component: SecondComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    CardComponent,
    EditDetailsDirective,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
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
export class AppModule {}
