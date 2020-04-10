import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorTemplateComponent } from './author-template.component';

describe('AuthorTemplateComponent', () => {
  let component: AuthorTemplateComponent;
  let fixture: ComponentFixture<AuthorTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorTemplateComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorTemplateComponent);
    component = fixture.componentInstance;
    component.author = { author_name: 'Some' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have he name of author', () => {
    expect('author_name').toBeDefined;
  });
  it('should have he name of author date of birth', () => {
    expect('Date_of_birth').toBeDefined;
  });
  it('should have element count ', () => {
    console.log(fixture.nativeElement.querySelectorAll('.text-muted'));
  });
});
