import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserModel } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { ProfileService } from '../services/profile.service';
import { EditComponent } from './edit/edit.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user = this.authService.decodeToken() as UserModel;
  id = this.user.id;
  userDetails:any;

  constructor(
    private authService : AuthService,
    private profileService: ProfileService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.profileService.getUser(this.id).subscribe(
      (rep) => {
        this.userDetails = rep;
      },
      (err) => {
        console.log(err);
      }
    )
  }

  edit(){
    const dialogRef = this.dialog.open(EditComponent,{
      width: '600px',
      disableClose: true,
      data:{
        user : this.userDetails,
      }
    })
    dialogRef.afterClosed().subscribe(( {data} ) => {
      this.profileService.editUser(this.id, data).subscribe(
        (reponse) => {
          this.getUser();
          this.snackbar.open('Profile updated', 'Close', {
            duration: 3000
          });
        },
        (error) => {
          console.log(error)
        }
      )
    })
  }

}
