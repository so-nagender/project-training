import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyLeftComponent } from './body-left.component';
import { BookdetailsComponent } from '../bookdetails/bookdetails.component';

fdescribe('BodyLeftComponent', () => {
  let component: BodyLeftComponent;
  let fixture: ComponentFixture<BodyLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyLeftComponent,BookdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it ('should have 6 values',()=>{
    const a=fixture.nativeElement.querySelectorAll("tr");
    expect(a.length).toBe(6); 
   });
});
