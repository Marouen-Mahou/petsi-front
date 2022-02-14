import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../guards/auth.guard";
import { NotAuthGuard } from "../guards/notAuth.guard";
import { ConfirmComponent } from "./confirm/confirm.component";
import { ForgotComponent } from "./forgot/forgot.component";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { RegisterComponent } from "./register/register.component";
import { ResetComponent } from "./reset/reset.component";


export const routes: Routes = [
  {path: 'login', component: LoginComponent,canActivate:[NotAuthGuard]},
  {path: 'register', component: RegisterComponent, canActivate:[NotAuthGuard]},
  {path: 'logout', component: LogoutComponent, canActivate:[AuthGuard]},
  {path: 'forgotPassword', component: ForgotComponent, canActivate:[NotAuthGuard]},
  {path: 'resetPassword/:token', component: ResetComponent, canActivate:[NotAuthGuard]},
  {path: 'confirmEmail/:token', component: ConfirmComponent, canActivate:[NotAuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
