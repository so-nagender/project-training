import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondComponent } from './second.component';
import { SecondFirstComponent } from '../second-first/second-first.component';
import { SecondSecondComponent } from '../second-second/second-second.component';

describe('SecondComponent', () => {
  let component: SecondComponent;
  let fixture: ComponentFixture<SecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SecondComponent, SecondFirstComponent, SecondSecondComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
