import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchStudentListComponent } from './batch-student-list.component';

describe('BatchStudentListComponent', () => {
  let component: BatchStudentListComponent;
  let fixture: ComponentFixture<BatchStudentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchStudentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
