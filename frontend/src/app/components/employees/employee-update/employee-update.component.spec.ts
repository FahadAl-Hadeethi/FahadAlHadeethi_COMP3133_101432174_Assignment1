import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeUpdateComponent } from './employee-update.component';

describe('UpdateEmployeeComponent', () => {
  let component: EmployeeUpdateComponent;
  let fixture: ComponentFixture<EmployeeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
