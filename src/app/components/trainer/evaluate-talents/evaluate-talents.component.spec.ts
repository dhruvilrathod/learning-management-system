import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateTalentsComponent } from './evaluate-talents.component';

describe('EvaluateTalentsComponent', () => {
  let component: EvaluateTalentsComponent;
  let fixture: ComponentFixture<EvaluateTalentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluateTalentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluateTalentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
