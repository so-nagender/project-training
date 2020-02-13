import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestViewComponent } from './rest-view.component';

describe('RestViewComponent', () => {
  let component: RestViewComponent;
  let fixture: ComponentFixture<RestViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
