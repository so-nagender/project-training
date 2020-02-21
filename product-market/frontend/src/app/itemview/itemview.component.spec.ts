import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemviewComponent } from './itemview.component';

describe('ItemviewComponent', () => {
  let component: ItemviewComponent;
  let fixture: ComponentFixture<ItemviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
