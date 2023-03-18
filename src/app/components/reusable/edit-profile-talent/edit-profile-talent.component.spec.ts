import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileTalentComponent } from './edit-profile-talent.component';

describe('EditProfileTalentComponent', () => {
  let component: EditProfileTalentComponent;
  let fixture: ComponentFixture<EditProfileTalentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileTalentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProfileTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
