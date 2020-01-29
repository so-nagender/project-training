import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyRightComponent } from './body-right/body-right.component';
import { BodyLeftComponent } from './body-left/body-left.component';
import { AuthorsDetailsComponent } from './authors-details/authors-details.component';
import { BOOKDATAComponent } from './book-data/book-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyRightComponent,
    BodyLeftComponent,
    AuthorsDetailsComponent,
    BOOKDATAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
