import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppUserLayoutComponent } from '../app-user-layout/app-user-layout.component';
import { AuthGuard } from '../guards/auth.guard';
import { DetailsComponent } from './details/details.component';
import { PatientsListComponent } from './patients-list/patients-list.component';

const routes: Routes = [
  { path: 'vet', component: AppUserLayoutComponent,canActivate:[AuthGuard], children: [
    { path: 'patients', component: PatientsListComponent},
    { path: 'patient/details', component: DetailsComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
