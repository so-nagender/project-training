import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyRightComponent } from './body-right.component';
import { AuthordetailsComponent } from '../authordetails/authordetails.component';

describe('BodyRightComponent', () => {
  let component: BodyRightComponent;
  let fixture: ComponentFixture<BodyRightComponent>;  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyRightComponent,AuthordetailsComponent ]
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
  it ('should have 5 values',()=>{
   const a=fixture.nativeElement.querySelectorAll("tr");
   expect(a.length).toBe(5); 
  });
});
