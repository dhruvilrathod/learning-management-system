import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGradesTableComponent } from './my-grades-table.component';

describe('MyGradesTableComponent', () => {
  let component: MyGradesTableComponent;
  let fixture: ComponentFixture<MyGradesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyGradesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyGradesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
