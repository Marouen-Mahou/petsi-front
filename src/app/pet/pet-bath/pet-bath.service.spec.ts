import { TestBed } from '@angular/core/testing';

import { PetBathService } from './pet-bath.service';

describe('PetBathService', () => {
  let service: PetBathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetBathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
