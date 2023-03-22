import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalAcknowledgementComponent } from './approval-acknowledgement.component';

describe('ApprovalAcknowledgementComponent', () => {
  let component: ApprovalAcknowledgementComponent;
  let fixture: ComponentFixture<ApprovalAcknowledgementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalAcknowledgementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovalAcknowledgementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
