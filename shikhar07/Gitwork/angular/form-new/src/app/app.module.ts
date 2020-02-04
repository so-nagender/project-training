import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Confirmemailvalidator} from './shared/confirm-equal-validator.directive'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    Confirmemailvalidator
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
