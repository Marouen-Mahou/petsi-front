import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Angular Materials
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';

// import { PetProfileVaccineComponent } from './pet-profile-vaccine/pet-profile-vaccine.component'
// import { PetProfileComponent } from './pet-profile/pet-profile.component';
// import { PetProfileFoodComponent } from './pet-profile-food/pet-profile-food.component';
// import { PetProfileBathComponent } from './pet-profile-bath/pet-profile-bath.component';
// import { PetProfileAppointmentComponent } from './pet-profile-appointment/pet-profile-appointment.component';
// import { PetProfileWeightComponent } from './pet-profile-weight/pet-profile-weight.component';
import { AppSideNavComponent } from './app-side-nav/app-side-nav.component';
import { AppUserLayoutComponent } from './app-user-layout/app-user-layout.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthInterceptorProvider } from './interceptors/jwt.interceptor';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';
import { SuccessComponent } from './success/success.component';
import { VaccineDialogComponent } from './pet/pet-vaccine/vaccine-dialog/vaccine-dialog.component';
import { AboutComponent } from './about/about.component';
import { PetModule } from './pet/pet.module';
import { VetModule } from './vet/vet.module';
import { PatientsModule } from './patients/patients.module';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './profile/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AppSideNavComponent,
    AppUserLayoutComponent,
    NotFoundComponent,
    SuccessComponent,
    VaccineDialogComponent,
    AboutComponent,
    ProfileComponent,
    EditComponent,
  ],
  imports: [
    MatDialogModule,
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
    AuthModule,
    PatientsModule,
    PetModule,
    VetModule,
    AppRoutingModule, // this must be the last
    NgbModule,
  ],
  providers: [AuthInterceptorProvider, AuthGuard, NotAuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
