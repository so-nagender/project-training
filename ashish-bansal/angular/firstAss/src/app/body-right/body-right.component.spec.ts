import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyRightComponent } from './body-right.component';
import { AuthordetailsComponent } from '../authordetails/authordetails.component';

fdescribe('BodyRightComponent', () => {
  let component: BodyRightComponent;
  let fixture: ComponentFixture<BodyRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyRightComponent, AuthordetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should give 5 values',() =>{
    let trs = fixture.nativeElement.querySelectorAll('.counter');
    expect(trs.length).toBe(5);
    // console.log(fixture.nativeElement.querySelectorAll('.counter').length)
  });
});
