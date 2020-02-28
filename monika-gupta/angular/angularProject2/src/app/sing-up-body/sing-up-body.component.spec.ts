import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingUpBodyComponent } from './sing-up-body.component';

describe('SingUpBodyComponent', () => {
  let component: SingUpBodyComponent;
  let fixture: ComponentFixture<SingUpBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingUpBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingUpBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
