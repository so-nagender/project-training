import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksTemplateComponent } from './books-template.component';

describe('BooksTemplateComponent', () => {
  let component: BooksTemplateComponent;
  let fixture: ComponentFixture<BooksTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
