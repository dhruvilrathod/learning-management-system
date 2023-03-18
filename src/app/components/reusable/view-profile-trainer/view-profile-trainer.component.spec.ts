import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProfileTrainerComponent } from './view-profile-trainer.component';

describe('ViewProfileTrainerComponent', () => {
  let component: ViewProfileTrainerComponent;
  let fixture: ComponentFixture<ViewProfileTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProfileTrainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProfileTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
