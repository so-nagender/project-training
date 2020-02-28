import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsdetailComponent } from './authorsdetail.component';

fdescribe('AuthorsdetailComponent', () => {
  let component: AuthorsdetailComponent;
  let fixture: ComponentFixture<AuthorsdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorsdetailComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsdetailComponent);
    component = fixture.componentInstance;
    component.detail = { authorName: 'some' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
