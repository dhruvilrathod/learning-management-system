import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramWiseTalentsComponent } from './program-wise-talents.component';

describe('ProgramWiseTalentsComponent', () => {
  let component: ProgramWiseTalentsComponent;
  let fixture: ComponentFixture<ProgramWiseTalentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramWiseTalentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramWiseTalentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
