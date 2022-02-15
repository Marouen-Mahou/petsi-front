import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetListComponent } from './pets-list/pet-list.component';

import { PetRoutingModule } from './pet-routing.module';
import { PetBathComponent } from './pet-bath/pet-bath.component';
import { PetFoodComponent } from './pet-food/pet-food.component';
import { PetProfileAppointmentComponent } from './pet-profile-appointment/pet-profile-appointment.component';
import { PetProfileBathComponent } from './pet-profile-bath/pet-profile-bath.component';
import { PetProfileFoodComponent } from './pet-profile-food/pet-profile-food.component';
import { PetProfileVaccineComponent } from './pet-profile-vaccine/pet-profile-vaccine.component';
import { PetProfileWeightComponent } from './pet-profile-weight/pet-profile-weight.component';
import { PetProfileComponent } from './pet-profile/pet-profile.component';
import { PetVaccineComponent } from './pet-vaccine/pet-vaccine.component';

import {MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule }   from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PetAppointmentComponent } from './pet-appointment/pet-appointment.component';
import { PetsComponent } from './pets/pets.component';
import { PetsDialogComponent } from './pets/pets-dialog/pets-dialog.component';


@NgModule({
  declarations: [    
    PetListComponent,
    PetProfileComponent,
    PetProfileVaccineComponent,
    PetProfileFoodComponent,
    PetProfileBathComponent,
    PetProfileAppointmentComponent,
    PetProfileWeightComponent,
    PetVaccineComponent,
    PetBathComponent,
    PetFoodComponent,
    PetAppointmentComponent,
    PetsComponent,
    PetsDialogComponent,

  ],
  imports: [
    FontAwesomeModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule,
    MatTableModule,
    MatSidenavModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    MatSnackBarModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    PetRoutingModule
  ],
  exports:[
    PetProfileComponent
  ]
})
export class PetModule { }
