import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSecondComponent } from './second-second.component';

describe('SecondSecondComponent', () => {
  let component: SecondSecondComponent;
  let fixture: ComponentFixture<SecondSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SecondSecondComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
