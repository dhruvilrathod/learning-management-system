import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProgramsComponent } from './all-programs.component';

describe('AllProgramsComponent', () => {
  let component: AllProgramsComponent;
  let fixture: ComponentFixture<AllProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllProgramsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
