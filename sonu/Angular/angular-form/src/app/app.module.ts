import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// import { ConfirmEqualValidatorDirective } from './share/confirm-equal-validator.directive';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Route } from '@angular/compiler/src/core';
import { CollegeDetailComponent } from './college-detail/college-detail.component';
import { AdmissionsComponent } from './admissions/admissions.component';

const appRoutes: Routes = [
  {path:'college-detail',component:CollegeDetailComponent},
  {path:'admissions',component:AdmissionsComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,
    CollegeDetailComponent,
    AdmissionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
