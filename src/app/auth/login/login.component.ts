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

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  retry(){
    this.error = "";
  }

  login(credentials: any){
    this.authService.login(credentials).subscribe(
      (rep:any) => {
        const token = rep.access_token;
        const link = ["user"];
        localStorage.setItem("token", token) ;
        this.router.navigate(link);
      },
      (err) => {
        if (err.error.message == "Wrong credentials!"){
          this.error="Wrong Credentials!";
        }
      }
    )
  }

}
