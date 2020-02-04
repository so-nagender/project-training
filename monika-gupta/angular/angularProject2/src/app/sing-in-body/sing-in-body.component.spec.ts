import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingInBodyComponent } from './sing-in-body.component';

describe('SingInBodyComponent', () => {
  let component: SingInBodyComponent;
  let fixture: ComponentFixture<SingInBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingInBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingInBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
