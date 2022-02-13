import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

// Angular Materials
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


// import { PetProfileVaccineComponent } from './pet-profile-vaccine/pet-profile-vaccine.component'
// import { PetProfileComponent } from './pet-profile/pet-profile.component';
// import { PetProfileFoodComponent } from './pet-profile-food/pet-profile-food.component';
// import { PetProfileBathComponent } from './pet-profile-bath/pet-profile-bath.component';
// import { PetProfileAppointmentComponent } from './pet-profile-appointment/pet-profile-appointment.component';
// import { PetProfileWeightComponent } from './pet-profile-weight/pet-profile-weight.component';
import { AppSideNavComponent } from './app-side-nav/app-side-nav.component';
import { AppUserLayoutComponent } from './app-user-layout/app-user-layout.component';
// import { PetVaccineComponent } from './pet-vaccine/pet-vaccine.component';
// import { PetBathComponent } from './pet-bath/pet-bath.component';
// import { PetAppointmentComponent } from './pet-appointment/pet-appointment.component';
// import { PetFoodComponent } from './pet-food/pet-food.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthInterceptorProvider } from './interceptors/jwt.interceptor';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';
import { SuccessComponent } from './success/success.component';
import { AboutComponent } from './about/about.component';
import { PetModule } from './pet/pet.module';
import { PatientsModule } from './patients/patients.module';


@NgModule({
  declarations: [
    AppComponent,
    // PetProfileComponent,
    // PetProfileVaccineComponent,
    // PetProfileFoodComponent,
    // PetProfileBathComponent,
    // PetProfileAppointmentComponent,
    // PetProfileWeightComponent,
    AppSideNavComponent,
    AppUserLayoutComponent,
    // PetVaccineComponent,
    // PetBathComponent,
    // PetAppointmentComponent,
    // PetFoodComponent,
    NotFoundComponent,
    SuccessComponent,
    AboutComponent,
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
    FormsModule,
    HttpClientModule,
    AuthModule,
    PatientsModule,
    PetModule,
    AppRoutingModule, // this must be the last
    NgbModule,
  ],
  providers: [
    AuthInterceptorProvider,
    AuthGuard,
    NotAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
