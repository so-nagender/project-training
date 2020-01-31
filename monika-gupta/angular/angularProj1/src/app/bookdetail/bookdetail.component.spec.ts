import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookdetailComponent } from './bookdetail.component';

fdescribe('BookdetailComponent', () => {
  let component: BookdetailComponent;
  let fixture: ComponentFixture<BookdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookdetailComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookdetailComponent);
    component = fixture.componentInstance;
    component.detail = { bookName: 'some' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
