import { TestBed } from '@angular/core/testing';

import { PetAppointmentService } from './pet-appointment.service';

describe('PetAppointmentService', () => {
  let service: PetAppointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetAppointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
