import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramGradesDetailsComponent } from './program-grades-details.component';

describe('ProgramGradesDetailsComponent', () => {
  let component: ProgramGradesDetailsComponent;
  let fixture: ComponentFixture<ProgramGradesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramGradesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramGradesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
