import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { SuccessComponent } from './success/success.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './auth/login/login.component';
import { NotAuthGuard } from './guards/notAuth.guard';

const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'success', component: SuccessComponent},
  { path: '', component: LoginComponent, canActivate:[NotAuthGuard] },
  { path: '**', component: NotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
