import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { By } from '@angular/platform-browser';

fdescribe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent, NavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('UI Testing', () => {
    let temp:any = fixture.nativeElement.querySelectorAll('h1');
   //expect(temp.length).toBe(1)
  });
  it('CSS testing', () => {
    let temp:any = fixture.debugElement.query(By.css('.ttt'));
    expect(temp.nativeElement.style.padding).toBe('10px');
  });
});
