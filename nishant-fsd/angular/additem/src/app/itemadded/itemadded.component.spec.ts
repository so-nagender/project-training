import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemaddedComponent } from './itemadded.component';

describe('ItemaddedComponent', () => {
  let component: ItemaddedComponent;
  let fixture: ComponentFixture<ItemaddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemaddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemaddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
