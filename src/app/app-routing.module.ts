import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetProfileComponent } from './pet-profile/pet-profile.component';
import { PetListComponent } from './pets-list/pet-list.component';

const routes: Routes = [
  { path: 'pet', component: PetProfileComponent},
  { path: 'petsList', component: PetListComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
