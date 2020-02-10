import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidPart2Component } from './mid-part2.component';

describe('MidPart2Component', () => {
  let component: MidPart2Component;
  let fixture: ComponentFixture<MidPart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidPart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidPart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
