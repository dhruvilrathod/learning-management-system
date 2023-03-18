import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationSheetComponent } from './evaluation-sheet.component';

describe('EvaluationSheetComponent', () => {
  let component: EvaluationSheetComponent;
  let fixture: ComponentFixture<EvaluationSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
