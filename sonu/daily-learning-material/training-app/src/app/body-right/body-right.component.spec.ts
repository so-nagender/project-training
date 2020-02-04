import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyRightComponent } from './body-right.component';

describe('BodyRightComponent', () => {
  let component: BodyRightComponent;
  let fixture: ComponentFixture<BodyRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
