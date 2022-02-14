import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  error:string="";

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {}

  retry(){
    this.error="";
  }

  submit(email:any):void{
    this.authService.forgot(email).subscribe(
      (rep) => {
        this.router.navigate(["success",{message:"Reset password link sent successfully!",next:"Go to login page", link:"/login"}]);
      },
      (err) => {
        if(err.error.message=="Reset password email already sent!"){
          this.error = "Reset password link already sent!"
        }else if(err.error.message=="There is no account with this email!"){
          this.error="There is no account with this email!";
        }
      }
    );
  }
}
