import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppUserLayoutComponent } from './app-user-layout/app-user-layout.component';
import { PetProfileComponent } from './pet-profile/pet-profile.component';
import { PetVaccineComponent } from './pet-vaccine/pet-vaccine.component';

const routes: Routes = [
  { path: 'user', component: AppUserLayoutComponent, children: [
    { path: 'pet', component: PetProfileComponent},
    { path: 'pet/vaccines', component: PetVaccineComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
