import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyRightComponent } from './body-right.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('BodyRightComponent', () => {
  let component: BodyRightComponent;
  let fixture: ComponentFixture<BodyRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BodyRightComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have 5 elements', () => {
    const y = fixture.nativeElement.querySelectorAll('tr');
    expect(y.length).toBe(5);
  });
});
