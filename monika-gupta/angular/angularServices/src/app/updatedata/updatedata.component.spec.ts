import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedataComponent } from './updatedata.component';

describe('UpdatedataComponent', () => {
  let component: UpdatedataComponent;
  let fixture: ComponentFixture<UpdatedataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatedataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
