import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProfileTalentComponent } from './view-profile-talent.component';

describe('ViewProfileTalentComponent', () => {
  let component: ViewProfileTalentComponent;
  let fixture: ComponentFixture<ViewProfileTalentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProfileTalentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProfileTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
