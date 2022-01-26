import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetProfileComponent } from './pet-profile/pet-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  { path: 'pet', component: PetProfileComponent, canActivate:[AuthGuard]},
  { path: 'success', component: SuccessComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
