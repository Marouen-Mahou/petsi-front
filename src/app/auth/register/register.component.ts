import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  minDate = new Date(1850, 0, 1);
  maxDate = new Date();
  error = null;
  selectedFile!: File;

  validatePhone(e:any): boolean {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false
    }
    return true
  }

  onSelectedFile(e:any){
    this.selectedFile = <File>e.target.files[0];
  }

  register(model:any){
    console.log("model:",model)
    let data = new FormData();
    data.append("avatar", this.selectedFile);
    data.append("firstName",model.firstName);
    data.append("lastName",model.lastName);
    data.append("adress",model.adress);
    data.append("birthdate",model.birthdate);
    data.append("email",model.email);
    data.append("gender",model.gender);
    data.append("password",model.password);
    data.append("role",model.role);
    data.append("phone",model.phone);
    this.authService.register(data).subscribe(
      (rep) => {
        console.log("rep", rep);
        const link = ["success"];
        this.router.navigate([link,{message:"You registered successfully!\nOne step left: a verification link was sent to your email",next:"Go to login page", link:"/login"}]);
      },
      (err)=>{
        console.log("error:",err);
        this.error = err.error.message;
      }
    )
  }

}
