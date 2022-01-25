import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  login(credentials: any){
    this.authService.login(credentials).subscribe(
      (rep:any) => {
        const token = rep.access_token;
        const link = ["pet"];
        localStorage.setItem("token", token) ;
        this.router.navigate(link);
      },
      (err) => {
        this.error="Wrong Credentials!";
      }
    )
  }
}
