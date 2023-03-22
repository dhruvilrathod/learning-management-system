import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramPublicationComponent } from './program-publication.component';

describe('ProgramPublicationComponent', () => {
  let component: ProgramPublicationComponent;
  let fixture: ComponentFixture<ProgramPublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramPublicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
