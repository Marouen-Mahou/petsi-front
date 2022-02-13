import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppUserLayoutComponent } from '../app-user-layout/app-user-layout.component';
import { AuthGuard } from '../guards/auth.guard';
import { PetAppointmentComponent } from './pet-appointment/pet-appointment.component';
import { PetFoodComponent } from './pet-food/pet-food.component';
import { PetProfileComponent } from './pet-profile/pet-profile.component';
import { PetVaccineComponent } from './pet-vaccine/pet-vaccine.component';
import { PetsComponent } from './pets/pets.component';

const routes: Routes = [
  { path: 'user', component: AppUserLayoutComponent,canActivate:[AuthGuard], children: [
    { path: 'pets', component: PetsComponent},
    { path: 'pet', component: PetProfileComponent},
    { path: 'pet/vaccines', component: PetVaccineComponent},
    { path: 'pet/foods', component: PetFoodComponent},
    { path: 'pet/appointments', component: PetAppointmentComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetRoutingModule { }
