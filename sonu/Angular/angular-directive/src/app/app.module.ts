import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollegeComponent } from './college/college.component';
import { StudentComponent } from './student/student.component';
import { FirstdirectiveDirective } from './firstdirective.directive';

@NgModule({
  declarations: [
    AppComponent,
    CollegeComponent,
    StudentComponent,
    FirstdirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
