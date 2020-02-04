import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidPart1Component } from './mid-part1.component';

describe('MidPart1Component', () => {
  let component: MidPart1Component;
  let fixture: ComponentFixture<MidPart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MidPart1Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidPart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
