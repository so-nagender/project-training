import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsdetailComponent } from './authorsdetail.component';

describe('AuthorsdetailComponent', () => {
  let component: AuthorsdetailComponent;
  let fixture: ComponentFixture<AuthorsdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorsdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
