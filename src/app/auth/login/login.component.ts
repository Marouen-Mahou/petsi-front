import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
// import { ProgressbarService } from 'src/app/services/progressbar.service';
// import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router
    // private alertService: AlertService
  ) {}

  ngOnInit() {}

  login(credentials: any){
    this.authService.login(credentials).subscribe(
      (rep:any) => {
        const token = rep.access_token;
        const link = ["pet"];
        localStorage.setItem("token", token) ;
        this.router.navigate(link);
      }
    )
  }


  // onSubmit(f: NgForm) {
  //   this.alertService.info('Check login information');
  //   this.progressService.startLoading();

  //   const loginObserver = {
  //     next: (x:any) => {
  //       this.progressService.setSuccess();
  //       this.alertService.success('Welcome back ' + x.username);
  //       this.progressService.completeLoading();
  //     },
  //     error: (err:any) => {
  //       this.progressService.setFailure();
  //       console.log(err);
  //       this.alertService.danger('Unable to Login');
  //       this.progressService.completeLoading();
  //     },
  //   };

  //   this.authService.login(f.value).subscribe(loginObserver);
  // }
}
