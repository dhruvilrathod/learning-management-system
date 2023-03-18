import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentApprovalComponent } from './talent-approval.component';

describe('TalentApprovalComponent', () => {
  let component: TalentApprovalComponent;
  let fixture: ComponentFixture<TalentApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalentApprovalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalentApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
