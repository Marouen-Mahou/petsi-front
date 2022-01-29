import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VetRoutingModule } from './vet-routing.module';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    VetRoutingModule,
  ]
})
export class VetModule { }
