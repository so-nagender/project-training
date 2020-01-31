import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyLeftComponent } from './body-left.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BookDetailsComponent } from '../book-details/book-details.component';

describe('BodyLeftComponent', () => {
  let component: BodyLeftComponent;
  let fixture: ComponentFixture<BodyLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BodyLeftComponent, BookDetailsComponent],
      imports: [],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyLeftComponent);
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
  it('SHould have 5 elements ', () => {
    let count1: any = fixture.nativeElement.querySelectorAll('.item');
    expect(count1.length).toBe(5);
  });
});
