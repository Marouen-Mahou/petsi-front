import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetProfileBathComponent } from './pet-profile-bath.component';

describe('PetProfileBathComponent', () => {
  let component: PetProfileBathComponent;
  let fixture: ComponentFixture<PetProfileBathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetProfileBathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetProfileBathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
