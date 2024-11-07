import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLeavePageComponent } from './add-leave-page.component';

describe('AddLeavePageComponent', () => {
  let component: AddLeavePageComponent;
  let fixture: ComponentFixture<AddLeavePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddLeavePageComponent]
    });
    fixture = TestBed.createComponent(AddLeavePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
