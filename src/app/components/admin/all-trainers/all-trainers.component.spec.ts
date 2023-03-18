import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTrainersComponent } from './all-trainers.component';

describe('AllTrainersComponent', () => {
  let component: AllTrainersComponent;
  let fixture: ComponentFixture<AllTrainersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTrainersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTrainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
