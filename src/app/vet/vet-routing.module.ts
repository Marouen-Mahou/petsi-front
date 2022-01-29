import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";

export const routes: Routes = [
  { path: 'vet/profile', component: ProfileComponent, children: [
    // { path: 'pet', component: PetProfileComponent},
    // { path: 'pet/vaccines', component: PetVaccineComponent},
    // { path: 'pet/foods', component: PetFoodComponent},
    // { path: 'pet/appointments', component: PetAppointmentComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VetRoutingModule {
}
