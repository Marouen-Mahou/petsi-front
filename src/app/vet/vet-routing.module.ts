import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppUserLayoutComponent } from '../app-user-layout/app-user-layout.component';
import { AuthGuard } from '../guards/auth.guard'
import { PetsComponent } from './pets/pets.component';
import { VetsComponent } from './vets/vets.component';

const routes: Routes = [
  { path: 'user', component: AppUserLayoutComponent,canActivate:[AuthGuard], children: [
  { path: 'vets', component: VetsComponent},
  { path: 'vets/:id', component: PetsComponent},
]},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VetRoutingModule { }
