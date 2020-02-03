import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyLeftComponent } from './body-left.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

fdescribe('BodyLeftComponent', () => {
  let component: BodyLeftComponent;
  let fixture: ComponentFixture<BodyLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyLeftComponent ],
      imports : [ FormsModule ],
      schemas :[NO_ERRORS_SCHEMA]
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

  it('should give 5 values',() =>{
    let trs = fixture.nativeElement.querySelectorAll('.counter');
    expect(trs.length).toBe(5);
    // console.log(fixture.nativeElement.querySelectorAll('.counter').length)
  });
});
