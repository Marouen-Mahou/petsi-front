import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetVaccineComponent } from './pet-vaccine.component';

describe('PetVaccineComponent', () => {
  let component: PetVaccineComponent;
  let fixture: ComponentFixture<PetVaccineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetVaccineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetVaccineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
