import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetBathComponent } from './pet-bath.component';

describe('PetBathComponent', () => {
  let component: PetBathComponent;
  let fixture: ComponentFixture<PetBathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetBathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetBathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
