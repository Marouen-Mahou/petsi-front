import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetProfileFoodComponent } from './pet-profile-food.component';

describe('PetProfileFoodComponent', () => {
  let component: PetProfileFoodComponent;
  let fixture: ComponentFixture<PetProfileFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetProfileFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetProfileFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
