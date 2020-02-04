import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BOOKDATAComponent } from './book-data.component';

describe('BOOKDATAComponent', () => {
  let component: BOOKDATAComponent;
  let fixture: ComponentFixture<BOOKDATAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BOOKDATAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BOOKDATAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
