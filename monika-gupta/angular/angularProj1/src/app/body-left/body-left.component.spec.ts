import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyLeftComponent } from './body-left.component';
import { BookdetailComponent } from '../bookdetail/bookdetail.component';

fdescribe('BodyLeftComponent', () => {
  let component: BodyLeftComponent;
  let fixture: ComponentFixture<BodyLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BodyLeftComponent, BookdetailComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyLeftComponent);
    component = fixture.componentInstance;
    component.book = [
      {id: 1,
      bookName: 'The Red Sari',
      authorName: 'Javier Moro',
      price: 600.0,
      ispNo: 567567,
      star: 3,
      bio: 'Lorem ipsum dolor sit amet, ad minim veniam,ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      {id: 2,
      bookName: 'Walking With Gaints',
      authorName: 'Thornton',
      price: 567.0,
      ispNo: 534234,
      star: 3,
      bio: 'Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco laboris nisia commodo consequat.'},
      {id: 3,
      bookName: 'Larry',
      authorName: 'The Bird',
      price: 787.0,
      ispNo: 567225,
      star: 5,
      bio: 'Lorem ipsum dolor sit amet, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ex ea commodo consequat.'},
      {id: 4,
      bookName: 'My Music My Life',
      authorName: 'G.D. Pradhan',
      price: 690.0,
      ispNo: 345567,
      star: 4,
      bio: 'Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      {id: 5,
      bookName: 'One Life is Not Enough',
      authorName: 'Neel Singh',
      price: 707.0, ispNo: 544646,
      star: 3,
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, exercitation ullamco laboris nisi ut aliquip.'}
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 5 elements', () => {
    const counter = fixture.nativeElement.querySelectorAll('.check');
    expect(counter.length).toBe(5);
  });
});
