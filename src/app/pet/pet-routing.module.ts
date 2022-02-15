import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppUserLayoutComponent } from '../app-user-layout/app-user-layout.component';
import { AuthGuard } from '../guards/auth.guard';
import { PetAppointmentComponent } from './pet-appointment/pet-appointment.component';
import { PetFoodComponent } from './pet-food/pet-food.component';
import { PetProfileComponent } from './pet-profile/pet-profile.component';
import { PetVaccineComponent } from './pet-vaccine/pet-vaccine.component';
import { PetBathComponent } from './pet-bath/pet-bath.component';
import { PetsComponent } from './pets/pets.component';

const routes: Routes = [
  { path: 'user', component: AppUserLayoutComponent,canActivate:[AuthGuard], children: [
    { path: 'pets', component: PetsComponent},
    { path: 'pets/:id/pet', component: PetProfileComponent},
    { path: 'pets/:id/pet/vaccines', component: PetVaccineComponent},
    { path: 'pets/:id/pet/foods', component: PetFoodComponent},
    { path: 'pets/:id/pet/baths', component: PetBathComponent},
    { path: 'pets/:id/pet/appointments', component: PetAppointmentComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetRoutingModule { }
