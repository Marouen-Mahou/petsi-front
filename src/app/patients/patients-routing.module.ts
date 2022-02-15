import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppUserLayoutComponent } from '../app-user-layout/app-user-layout.component';
import { AuthGuard } from '../guards/auth.guard';
import { VetGuard } from '../guards/vet.guard';
import { ProfileComponent } from '../profile/profile.component';
import { DetailsComponent } from './details/details.component';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { RequestsComponent } from './requests/requests.component';

const routes: Routes = [
  { path: 'vet', component: AppUserLayoutComponent,canActivate:[AuthGuard, VetGuard], children: [
    { path: 'patients', component: PatientsListComponent},
    { path: 'patient/:id', component: DetailsComponent},
    { path: 'requests', component: RequestsComponent},
    { path: 'profile', component: ProfileComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
