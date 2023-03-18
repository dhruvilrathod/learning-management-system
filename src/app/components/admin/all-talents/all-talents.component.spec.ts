import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTalentsComponent } from './all-talents.component';

describe('AllTalentsComponent', () => {
  let component: AllTalentsComponent;
  let fixture: ComponentFixture<AllTalentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTalentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTalentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
