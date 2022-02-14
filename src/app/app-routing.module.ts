import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetListComponent } from './pet/pets-list/pet-list.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { SuccessComponent } from './success/success.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'success', component: SuccessComponent},
  { path: '**', component: NotFoundComponent } ,
  { path: 'petsList', component: PetListComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
