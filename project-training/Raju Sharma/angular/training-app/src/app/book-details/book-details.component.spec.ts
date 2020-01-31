import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailsComponent } from './book-details.component';

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookDetailsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    component.books = [
      { bookName: 'Half girlfriend', bookAuthorName: 'Chetan Bhagat', bookPrice: 400, bookISPno: 1232, rate: 3 },
      { bookName: 'EveryWhere', bookAuthorName: 'Nency', bookPrice: 3421, bookISPno: 3332, rate: 4 },
      { bookName: 'Guilt', bookAuthorName: 'John Son', bookPrice: 290, bookISPno: 5232, rate: 5 },
      { bookName: 'Chappak', bookAuthorName: 'Deependra', bookPrice: 1400, bookISPno: 2332, rate: 2 },
      { bookName: 'Kill Bill', bookAuthorName: 'Raman Raghav', bookPrice: 4400, bookISPno: 1152, rate: 3 }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
