import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetProfileAppointmentComponent } from './pet-profile-appointment.component';

describe('PetProfileAppointmentComponent', () => {
  let component: PetProfileAppointmentComponent;
  let fixture: ComponentFixture<PetProfileAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetProfileAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetProfileAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
