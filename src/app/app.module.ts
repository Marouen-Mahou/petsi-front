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
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { PetProfileVaccineComponent } from './pet-profile-vaccine/pet-profile-vaccine.component'
import { PetProfileComponent } from './pet-profile/pet-profile.component';
import { PetProfileFoodComponent } from './pet-profile-food/pet-profile-food.component';
import { PetProfileBathComponent } from './pet-profile-bath/pet-profile-bath.component';
import { PetProfileAppointmentComponent } from './pet-profile-appointment/pet-profile-appointment.component';
import { PetProfileWeightComponent } from './pet-profile-weight/pet-profile-weight.component';
import { AppSideNavComponent } from './app-side-nav/app-side-nav.component';
import { AppUserLayoutComponent } from './app-user-layout/app-user-layout.component';
import { PetVaccineComponent } from './pet-vaccine/pet-vaccine.component';
import { PetBathComponent } from './pet-bath/pet-bath.component';
import { PetAppointmentComponent } from './pet-appointment/pet-appointment.component';
import { PetFoodComponent } from './pet-food/pet-food.component';


@NgModule({
  declarations: [
    AppComponent,
    PetProfileComponent,
    PetProfileVaccineComponent,
    PetProfileFoodComponent,
    PetProfileBathComponent,
    PetProfileAppointmentComponent,
    PetProfileWeightComponent,
    AppSideNavComponent,
    AppUserLayoutComponent,
    PetVaccineComponent,
    PetBathComponent,
    PetAppointmentComponent,
    PetFoodComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSnackBarModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
