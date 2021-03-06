import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Employee2Component } from './employee.component';

describe('Employee2Component', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<Employee2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Employee2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Employee2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
