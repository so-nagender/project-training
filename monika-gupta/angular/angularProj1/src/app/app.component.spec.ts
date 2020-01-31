import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyLeftComponent } from './body-left/body-left.component';
import { BodyRightComponent } from './body-right/body-right.component';
import { AuthorsdetailComponent } from './authorsdetail/authorsdetail.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';

fdescribe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [
        AppComponent,
        HeaderComponent,
        BodyLeftComponent,
        BodyRightComponent,
        AuthorsdetailComponent,
        BookdetailComponent,
        FormComponent,
        FooterComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angularProj1'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angularProj1');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('angularProj1 app is running!');
  // });
});
