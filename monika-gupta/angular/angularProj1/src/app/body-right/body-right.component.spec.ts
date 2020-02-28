import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyRightComponent } from './body-right.component';
import { AuthorsdetailComponent } from '../authorsdetail/authorsdetail.component';

fdescribe('BodyRightComponent', () => {
  let component: BodyRightComponent;
  let fixture: ComponentFixture<BodyRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BodyRightComponent, AuthorsdetailComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 5 elements', () => {
    const counter = fixture.nativeElement.querySelectorAll('.check');
    expect(counter.length).toBe(5);
  });
});
