import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  error="";
  verified=true;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  login(credentials: any){
    this.error="";
    this.verified=true;
    this.authService.login(credentials).subscribe(
      (rep:any) => {
        const token = rep.access_token;
        const role = rep.user.role;
        // this.authService.setUser(role);
        const link = ["user"];
        localStorage.setItem("token", token) ;
        this.router.navigate(link);
      },
      (err) => {
        if (err.error.message == "Wrong credentials!"){
          this.error="Wrong Credentials!";
        }else if(err.error.message == "Account not verified yet!"){
          this.verified = false;
        }
      }
    )
  }

}
