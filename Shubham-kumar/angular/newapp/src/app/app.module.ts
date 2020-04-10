import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyLeftComponent } from './body-left/body-left.component';
import { BodyRightComponent } from './body-right/body-right.component';
import { CapitalizePipe } from './capitalize.pipe';
import { CustomPipePipe } from './custom-pipe.pipe';
import { AuthorTemplateComponent } from './author-template/author-template.component';
import { BooksTemplateComponent } from './books-template/books-template.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyLeftComponent,
    BodyRightComponent,
    CapitalizePipe,
    CustomPipePipe,
    AuthorTemplateComponent,
    BooksTemplateComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
