import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorTemplateComponent } from './author-template.component';

describe('AuthorTemplateComponent', () => {
  let component: AuthorTemplateComponent;
  let fixture: ComponentFixture<AuthorTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
