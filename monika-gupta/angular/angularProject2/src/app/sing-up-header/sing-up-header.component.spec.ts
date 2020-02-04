import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingUpHeaderComponent } from './sing-up-header.component';

describe('SingUpHeaderComponent', () => {
  let component: SingUpHeaderComponent;
  let fixture: ComponentFixture<SingUpHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingUpHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingUpHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
