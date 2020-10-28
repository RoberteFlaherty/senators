import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenatorsComponent } from './senators.component';

describe('SenatorsComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<SenatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
