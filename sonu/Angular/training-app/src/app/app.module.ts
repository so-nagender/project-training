import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { BodyLeftComponent } from "./body-left/body-left.component";
import { BodyRightComponent } from "./body-right/body-right.component";
import { SectionComponent } from "./section/section.component";
import { AuthorDetailComponent } from "./author-detail/author-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyLeftComponent,
    BodyRightComponent,
    SectionComponent,
    AuthorDetailComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
