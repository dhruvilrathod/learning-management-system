import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramDetailsViewComponent } from './program-details-view.component';

describe('ProgramDetailsViewComponent', () => {
  let component: ProgramDetailsViewComponent;
  let fixture: ComponentFixture<ProgramDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramDetailsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
