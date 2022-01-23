import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




// Angular Materials
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon'
import { MatTableModule } from '@angular/material/table'


import { PetProfileVaccineComponent } from './pet-profile-vaccine/pet-profile-vaccine.component'
import { PetProfileComponent } from './pet-profile/pet-profile.component';
import { PetProfileFoodComponent } from './pet-profile-food/pet-profile-food.component';
import { PetProfileBathComponent } from './pet-profile-bath/pet-profile-bath.component';
import { PetProfileAppointmentComponent } from './pet-profile-appointment/pet-profile-appointment.component';
import { PetProfileWeightComponent } from './pet-profile-weight/pet-profile-weight.component';


@NgModule({
  declarations: [
    AppComponent,
    PetProfileComponent,
    PetProfileVaccineComponent,
    PetProfileFoodComponent,
    PetProfileBathComponent,
    PetProfileAppointmentComponent,
    PetProfileWeightComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
