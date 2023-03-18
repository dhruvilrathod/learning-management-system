import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentApprovalComponent } from './enrollment-approval.component';

describe('EnrollmentApprovalComponent', () => {
  let component: EnrollmentApprovalComponent;
  let fixture: ComponentFixture<EnrollmentApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollmentApprovalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollmentApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
