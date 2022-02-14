import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }


  async confirm(){
    const token = this.route.snapshot.params['token'];
    this.authService.confirm({token}).subscribe(
      (rep) => {
        this.router.navigate(["success",{message:"Your account is confirmed successfully!",next:"Go to login page", link:"/login"}]);
      },
      (err) => {
        console.log("error:",err)
        throw new Error(err.error.message);
      }
    )
  }

}
