import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { DetailsComponent } from './details/details.component';
import { PetModule } from '../pet/pet.module';
import { MatCardModule } from '@angular/material/card';
import { RequestsComponent } from './requests/requests.component';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    PatientsListComponent,
    DetailsComponent,
    RequestsComponent,
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    PetModule,
    MatCardModule,
    MatFormFieldModule
  ]
})
export class PatientsModule { }
