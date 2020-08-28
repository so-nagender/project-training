import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmovieComponent } from './editmovie.component';

describe('EditmovieComponent', () => {
  let component: EditmovieComponent;
  let fixture: ComponentFixture<EditmovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditmovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
