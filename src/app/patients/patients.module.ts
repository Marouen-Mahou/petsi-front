import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { DetailsComponent } from './details/details.component';
import { PetModule } from '../pet/pet.module';


@NgModule({
  declarations: [
    PatientsListComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    PetModule,
  ]
})
export class PatientsModule { }
