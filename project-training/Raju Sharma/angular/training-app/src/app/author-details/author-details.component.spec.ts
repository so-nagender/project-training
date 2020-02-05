import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorDetailsComponent } from './author-details.component';
import { FormsModule } from '@angular/forms';

describe('AuthorDetailsComponent', () => {
  let component: AuthorDetailsComponent;
  let fixture: ComponentFixture<AuthorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorDetailsComponent],
      imports: [FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorDetailsComponent);
    component = fixture.componentInstance;
    component.authors = [
      {
        authorName: 'Raju Sharma',
        authorCountry: 'India',
        authorLastBook: 'Data Structure',
        birthDate: '01-23-1990',
        rate: 5,
        bio:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet ipsam ut fugit blanditiis! Rem asperiores sit optio hic, nesciunt nihil consectetur dolorem soluta debitis harum distinctio ratione amet nam aperiam.'
      },
      {
        authorName: 'Monika',
        authorCountry: 'Bangladesh',
        authorLastBook: 'Kahani',
        birthDate: '11-12-1996',
        rate: 4,
        bio:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet ipsam ut fugit blanditiis! Rem asperiores sit optio hic, nesciunt nihil consectetur dolorem soluta debitis harum distinctio ratione amet nam aperiam.'
      },
      {
        authorName: 'Shiwani',
        authorCountry: 'India',
        authorLastBook: 'StepUp',
        birthDate: '10-19-2000',
        rate: 4,
        bio:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet ipsam ut fugit blanditiis! Rem asperiores sit optio hic, nesciunt nihil consectetur dolorem soluta debitis harum distinctio ratione amet nam aperiam.'
      },
      {
        authorName: 'Niharika',
        authorCountry: 'India',
        authorLastBook: 'One',
        birthDate: '06-20-1991',
        rate: 5,
        bio:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet ipsam ut fugit blanditiis! Rem asperiores sit optio hic, nesciunt nihil consectetur dolorem soluta debitis harum distinctio ratione amet nam aperiam.'
      },
      {
        authorName: 'Nancy Momoland',
        authorCountry: 'South Korea',
        authorLastBook: 'Domkeis',
        birthDate: '04-24-1997',
        rate: 0,
        bio:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet ipsam ut fugit blanditiis! Rem asperiores sit optio hic, nesciunt nihil consectetur dolorem soluta debitis harum distinctio ratione amet nam aperiam.'
      }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
