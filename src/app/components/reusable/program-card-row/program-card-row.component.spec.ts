import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramCardRowComponent } from './program-card-row.component';

describe('ProgramCardRowComponent', () => {
  let component: ProgramCardRowComponent;
  let fixture: ComponentFixture<ProgramCardRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramCardRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramCardRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
