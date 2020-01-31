import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyLeftComponent } from './body-left.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { doesNotThrow } from 'assert';
import { LeftSectionComponent } from '../left-section/left-section.component';

fdescribe('BodyLeftComponent', () => {
  let component: BodyLeftComponent;
  let fixture: ComponentFixture<BodyLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyLeftComponent, LeftSectionComponent ],
      imports: [ ],
      schemas: [NO_ERRORS_SCHEMA]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have 4 elements', () => {
   var elements = fixture.nativeElement.querySelectorAll('.rows');
   expect(elements.length).toBe(8);
  });
});
