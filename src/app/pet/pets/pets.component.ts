import { Component, OnInit } from '@angular/core';
import { PetsDialogComponent } from './pets-dialog/pets-dialog.component';
import { PetsService } from './pets.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth.service';
import { UserModel } from '../../models/user.model';
import * as moment from 'moment'

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {
  moment = moment //Moment.js

  patients: any[] = [];
  user = this.authService.decodeToken() as UserModel;

  constructor(private petsService: PetsService, private snackbar: MatSnackBar, private dialog: MatDialog, private authService: AuthService) { }

  ngOnInit(): void {
    this.petsService.getPets().subscribe(
      (rep) => {
        this.patients = rep;
      },
      (err) => {
        console.log(err);
      }
    )
  }

  addPet(){
    console.log(this.user)
    const dialogRef = this.dialog.open(PetsDialogComponent,{
      width: '600px',
    })

    dialogRef.afterClosed().subscribe(({ data }) => {
      data.owner = this.user.id
      this.petsService.addPet(data).subscribe(
        (reponse) => {
              console.log(reponse)
              this.snackbar.open('Pet added', 'Close', {
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
