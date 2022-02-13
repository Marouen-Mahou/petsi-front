import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetProfileVaccineComponent } from './pet-profile-vaccine.component';

describe('PetProfileVaccineComponent', () => {
  let component: PetProfileVaccineComponent;
  let fixture: ComponentFixture<PetProfileVaccineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetProfileVaccineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetProfileVaccineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
