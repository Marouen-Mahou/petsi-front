import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppUserLayoutComponent } from '../app-user-layout/app-user-layout.component';
import { AuthGuard } from '../guards/auth.guard';
import { UserGuard } from '../guards/user.guard';
import { ProfileComponent } from '../profile/profile.component';
import { PetAppointmentComponent } from './pet-appointment/pet-appointment.component';
import { PetFoodComponent } from './pet-food/pet-food.component';
import { PetProfileComponent } from './pet-profile/pet-profile.component';
import { PetVaccineComponent } from './pet-vaccine/pet-vaccine.component';

const routes: Routes = [
  { path: 'user', component: AppUserLayoutComponent,canActivate:[AuthGuard, UserGuard], children: [
    { path: 'pet', component: PetProfileComponent},
    { path: 'pet/vaccines', component: PetVaccineComponent},
    { path: 'pet/foods', component: PetFoodComponent},
    { path: 'pet/appointments', component: PetAppointmentComponent},
    { path: 'profile', component: ProfileComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetRoutingModule { }
