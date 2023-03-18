import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramActivationComponent } from './program-activation.component';

describe('ProgramActivationComponent', () => {
  let component: ProgramActivationComponent;
  let fixture: ComponentFixture<ProgramActivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramActivationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
