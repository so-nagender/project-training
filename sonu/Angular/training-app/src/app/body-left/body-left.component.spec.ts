import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BodyLeftComponent } from "./body-left.component";
import { SectionComponent } from "../section/section.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";

fdescribe("BodyLeftComponent", () => {
  let component: BodyLeftComponent;
  let fixture: ComponentFixture<BodyLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BodyLeftComponent],
      imports: [],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have 4 elements", () => {
    const a = fixture.nativeElement.querySelectorAll(".row_select_left");
    console.log(a);
    expect(a.length).toBe(4);
  });
});
