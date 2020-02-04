import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsDetailsComponent } from './authors-details.component';

describe('AuthorsDetailsComponent', () => {
  let component: AuthorsDetailsComponent;
  let fixture: ComponentFixture<AuthorsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
