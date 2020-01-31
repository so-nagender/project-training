import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BodyRightComponent } from "./body-right.component";
import { SectionComponent } from "../section/section.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";

fdescribe("BodyRightComponent", () => {
  let component: BodyRightComponent;
  let fixture: ComponentFixture<BodyRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BodyRightComponent, SectionComponent],
      imports: [],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyRightComponent);
    component = fixture.componentInstance;
    // component.authorinfo= [
    // {publication:"BudgetBook" , country:"California" , last_book:"Relative Motion" , DOB: "jun/23/1980" , star: 5},
    // {publication:"Universal" , country:"India" , last_book:"Normal Form" , DOB: "jan/5/1990" , star: 5},
    // ];
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have 2 elements", () => {
    const a = fixture.nativeElement.querySelectorAll(".row_selcet");
    console.log(a);
    expect(a.length).toBe(4);
  });
});
