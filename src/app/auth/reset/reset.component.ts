import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  constructor(private authService: AuthService,private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  password:string="";
  error="";

  getPassword(pwd:any){
    this.password = pwd;
  }

  match(pwd:any){
    if (this.password != pwd) {
      this.error = "Password does not match!";
    }else{
      this.error ="";
    }
  }
  reset(data:any){
    data.token = this.route.snapshot.params['token'];
    this.authService.reset(data).subscribe(
      () => {
        this.router.navigateByUrl("/login");
      }
    )
  }

}
