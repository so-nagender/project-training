import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyLeftComponent } from './body-left/body-left.component';
import { BodyRightComponent } from './body-right/body-right.component';
import { AuthorsdetailComponent } from './authorsdetail/authorsdetail.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyLeftComponent,
    BodyRightComponent,
    AuthorsdetailComponent,
    BookdetailComponent,
    FormComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
