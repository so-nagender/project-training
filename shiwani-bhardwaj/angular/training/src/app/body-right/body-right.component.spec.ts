import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyRightComponent } from './body-right.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('BodyRightComponent', () => {
  let component: BodyRightComponent;
  let fixture: ComponentFixture<BodyRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyRightComponent ],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyRightComponent);
    component = fixture.componentInstance;
    component.Author=[
      {
        
        serial_number:1,
        author_name:"Jaswant Singh",
        country:"india",
        last_book:"India at Risk",
        year_of_birth:'01-01-200',
        star:3
    },
    {
    
        serial_number:2,
        author_name:"Jawahar Lal Nehru",
        country:"india",
        last_book:"The Discovery of India",
        year_of_birth:'01-01-1990',
        star:3
    },
    {
    
        serial_number:3,
        author_name:"Jawahar Lal Nehru",
        country:"india",
        last_book:"The Discovery of India",
        year_of_birth:'01-10-2001',
        star:3
    },
    {
    
        serial_number:1,
        author_name:"Jaswant Singh",
        country:"india",
        last_book:"India at Risk",
        year_of_birth:'02-04-2001',
        star:3
    },
    {
    
        serial_number:5,
        author_name:"Jawahar Lal Nehru",
        country:"india",
        last_book:"The Discovery of India",
        year_of_birth:'05-21-1997',
        star:2
    },

    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have 5 elements', () => {
    const a=fixture.nativeElement.querySelectorAll('.author1');
    expect(a.length).toBe(5);
   });
});
