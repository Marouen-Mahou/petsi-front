import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppUserLayoutComponent } from './app-user-layout/app-user-layout.component';
import { PetAppointmentComponent } from './pet-appointment/pet-appointment.component';
import { PetFoodComponent } from './pet-food/pet-food.component';
import { PetProfileComponent } from './pet-profile/pet-profile.component';
import { PetVaccineComponent } from './pet-vaccine/pet-vaccine.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { SuccessComponent } from './success/success.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'user', component: AppUserLayoutComponent,canActivate:[AuthGuard], children: [
    { path: 'pet', component: PetProfileComponent},
    { path: 'pet/vaccines', component: PetVaccineComponent},
    { path: 'pet/foods', component: PetFoodComponent},
    { path: 'pet/appointments', component: PetAppointmentComponent},
  ]},
  { path: 'about', component: AboutComponent},
  { path: 'success', component: SuccessComponent},
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
