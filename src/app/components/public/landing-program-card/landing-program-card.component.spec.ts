import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingProgramCardComponent } from './landing-program-card.component';

describe('LandingProgramCardComponent', () => {
  let component: LandingProgramCardComponent;
  let fixture: ComponentFixture<LandingProgramCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingProgramCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingProgramCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
