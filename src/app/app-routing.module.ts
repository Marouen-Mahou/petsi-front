import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppUserLayoutComponent } from './app-user-layout/app-user-layout.component';
import { PetProfileComponent } from './pet-profile/pet-profile.component';

const routes: Routes = [
  { path: 'user', component: AppUserLayoutComponent, children: [
    { path: 'pet', component: PetProfileComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
