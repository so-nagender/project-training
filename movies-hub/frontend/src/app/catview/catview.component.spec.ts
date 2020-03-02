import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatviewComponent } from './catview.component';

describe('CatviewComponent', () => {
  let component: CatviewComponent;
  let fixture: ComponentFixture<CatviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
