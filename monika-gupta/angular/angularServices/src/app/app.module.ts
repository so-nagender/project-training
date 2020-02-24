import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from 'src/interceptor';
import { GetDataComponent } from './get-data/get-data.component';
import { PostDataComponent } from './post-data/post-data.component';
import { UpdatedataComponent } from './updatedata/updatedata.component';
import { ShowMovieComponent } from './show-movie/show-movie.component';

const appRoutes: Routes = [
  { path: '', component: GetDataComponent },
  { path: 'postdata', component: PostDataComponent },
  { path: 'movie/edit/:id', component: UpdatedataComponent },
  { path: 'movie/show/:id', component: ShowMovieComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GetDataComponent,
    PostDataComponent,
    UpdatedataComponent,
    ShowMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
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
