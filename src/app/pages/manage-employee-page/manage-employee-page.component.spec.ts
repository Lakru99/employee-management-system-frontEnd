import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEmployeePageComponent } from './manage-employee-page.component';

describe('ManageEmployeePageComponent', () => {
  let component: ManageEmployeePageComponent;
  let fixture: ComponentFixture<ManageEmployeePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageEmployeePageComponent]
    });
    fixture = TestBed.createComponent(ManageEmployeePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
