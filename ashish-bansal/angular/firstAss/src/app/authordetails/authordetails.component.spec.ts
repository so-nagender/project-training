import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthordetailsComponent } from './authordetails.component';

fdescribe('AuthordetailsComponent', () => {
  let component: AuthordetailsComponent;
  let fixture: ComponentFixture<AuthordetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthordetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthordetailsComponent);
    component = fixture.componentInstance;
    component.details = [{id: 1,name: 'Ta-Nehisi Coates',lastBook : 'We Were Eight Years in Power: An American Tragedy',DateofBirth : '05-01-1998',Bio : 'lorem fvnkfvnkfvnfk divikcjrtvkrj ktrbyhtkjvrkn tvtkyjbykj btrjyrtjbyj',country : 'America' },
    {id: 2,name: 'Daniel Riley',lastBook : 'Fly Me' ,DateofBirth : '05-01-1998',Bio : 'lorem fvnkfvnkfvnfk divikcjrtvkrj ktrbyhtkjvrkn tvtkyjbykj btrjyrtjbyj',country : 'America' },
    {id: 3,name: 'Lisa Wingate',lastBook : 'Before We Were Yours' ,DateofBirth : '05-01-1998',Bio : 'lorem fvnkfvnkfvnfk divikcjrtvkrj ktrbyhtkjvrkn tvtkyjbykj btrjyrtjbyj',country : 'America' },
    {id: 4,name: 'Lisa Wingate',lastBook : 'Before We Were Yours' ,DateofBirth : '05-01-1998',Bio : 'lorem fvnkfvnkfvnfk divikcjrtvkrj ktrbyhtkjvrkn tvtkyjbykj btrjyrtjbyj',country : 'America' },
    {id: 5,name: 'Lisa Wingate',lastBook : 'Before We Were Yours' ,DateofBirth : '05-01-1998',Bio : 'lorem fvnkfvnkfvnfk divikcjrtvkrj ktrbyhtkjvrkn tvtkyjbykj btrjyrtjbyj',country : 'America' }];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
