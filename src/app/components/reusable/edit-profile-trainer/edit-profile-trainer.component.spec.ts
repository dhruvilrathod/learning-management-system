import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileTrainerComponent } from './edit-profile-trainer.component';

describe('EditProfileTrainerComponent', () => {
  let component: EditProfileTrainerComponent;
  let fixture: ComponentFixture<EditProfileTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileTrainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProfileTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
