import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingInHeaderComponent } from './sing-in-header.component';

describe('SingInHeaderComponent', () => {
  let component: SingInHeaderComponent;
  let fixture: ComponentFixture<SingInHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingInHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingInHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
