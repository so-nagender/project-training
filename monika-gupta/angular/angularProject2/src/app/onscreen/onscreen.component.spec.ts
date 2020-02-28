import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnscreenComponent } from './onscreen.component';

fdescribe('OnscreenComponent', () => {
  let component: OnscreenComponent;
  let fixture: ComponentFixture<OnscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
