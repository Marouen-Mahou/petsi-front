import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetProfileWeightComponent } from './pet-profile-weight.component';

describe('PetProfileWeightComponent', () => {
  let component: PetProfileWeightComponent;
  let fixture: ComponentFixture<PetProfileWeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetProfileWeightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetProfileWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
