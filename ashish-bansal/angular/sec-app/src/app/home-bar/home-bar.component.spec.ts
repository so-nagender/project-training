import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBarComponent } from './home-bar.component';
import { By } from '@angular/platform-browser';

fdescribe('HomeBarComponent', () => {
  let component: HomeBarComponent;
  let fixture: ComponentFixture<HomeBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeBarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a padding', function() {
    // var successButton = fixture.nativeElement.querySelectorAll('button-color');
    // expect(successButton.css('background-color')).toEqual('rgb(83, 201, 248);');

    //   let input = fixture.nativeElement.query(By.css('button-color'));
    // expect(input.nativeElement.style.background.color).toBe('rgb(83, 201, 248)');
    var check = fixture.debugElement.query(By.css('.row')).nativeElement;
    // expect(check.styles['line-height']).toBe('70px')
    expect(check.nativeElement.style.lineHeight).toBe('70px');
    // console.log(check.nativeElement.style.color);
  });
});
