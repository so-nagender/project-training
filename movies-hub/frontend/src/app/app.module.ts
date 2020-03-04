import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { DefaultComponent } from './default/default.component'
import { FooterComponent } from './footer/footer.component'
// import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { EditmovieComponent } from './editmovie/editmovie.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from '../app/interceptor';
import { DataResolverService } from './data-resolver.service';
import { GenresComponent } from './genres/genres.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import { FilterdataPipe } from './filterdata.pipe';
import { CatviewComponent } from './catview/catview.component';
import { EditgenreComponent } from './editgenre/editgenre.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { CookieService } from 'ngx-cookie-service';


const appRoutes: Routes = [
  {path:'movielist',component:MovieListComponent},   
  {
    path: 'home',
    component: HomeComponent,
    resolve: {
      hero: DataResolverService
    }
  },
  { path: '', component: DefaultComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'movie/:id',
    component: DetailsComponent,
    resolve: {
      hero: DataResolverService
    }
  },
  { 
    path: 'edit/:id', 
    component: EditmovieComponent,
    resolve: {
      hero: DataResolverService
    }
   },
  { 
    path: 'add', 
    component: AddmovieComponent,
    resolve: {
      hero: DataResolverService
    }
   },
  { 
    path: 'list', 
    component: ListComponent,
    resolve: {
      hero: DataResolverService
    }
   },
   { 
    path: 'Genres', 
    component: GenresComponent,
    resolve: {
      hero: DataResolverService
    }
   },
   { 
    path: 'movieByCatg/:id', 
    component: CatviewComponent,
    resolve: {
      hero: DataResolverService
    }
   },
   {
    path: 'editgenre/:id', 
    component: EditgenreComponent,
    resolve: {
      hero: DataResolverService
    }
   },
   {
    path: 'watchlist', 
    component: WatchlistComponent,
    resolve: {
      hero: DataResolverService
    }
   }

];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DefaultComponent,
    FooterComponent,
    SignupComponent,
    DetailsComponent,
    ListComponent,
    EditmovieComponent,
    AddmovieComponent,
     FilterdataPipe,
    GenresComponent,
    MovieListComponent,
    CatviewComponent,
    EditgenreComponent,
    WatchlistComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
    ),

    BrowserAnimationsModule,

    MatTableModule,

    MatPaginatorModule,

    MatSortModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi: true
  },
  CookieService,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
