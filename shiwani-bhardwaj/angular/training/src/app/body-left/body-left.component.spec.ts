import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyLeftComponent } from './body-left.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

fdescribe('BodyLeftComponent', () => {
  let component: BodyLeftComponent;
  let fixture: ComponentFixture<BodyLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyLeftComponent ],
      schemas:[NO_ERRORS_SCHEMA]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyLeftComponent);
    component = fixture.componentInstance;
    component.Book=[
      {
        book_name: "Three mistakes of my life",
        author_name:"chetan baghat",
        publishing_date:"may",
        book_code:5200,
        book_type:"thrill",
        star:5
},
{      
         book_name: "Three mistakes of my life",
        author_name:"chetan baghat",
        publishing_date:"may",
        book_code:5200,
        book_type:"thrill",
        star:2
},
{       book_name: "You were my crush",
        author_name:"chetan baghat",
        publishing_date:"may",
        book_code:5200,
        book_type:"thrill",
        star:5
},
{       book_name: "Three mistakes of my life",
        author_name:"chetan baghat",
        publishing_date:"may",
        book_code:5200,
        book_type:"thrill",
        star:4
},
{       book_name: "Three mistakes of my life",
        author_name:"chetan baghat",
        publishing_date:"may",
        book_code:5200,
        book_type:"thrill",
        star:3
}
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have 5 elements', () => {
   const a=fixture.nativeElement.querySelectorAll('.book_1');
   expect(a.length).toBe(5);
  });
});
