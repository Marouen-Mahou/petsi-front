import { Component, OnInit } from '@angular/core';
import { VetService } from '../vet.service';
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

  pets: any[] = [];
  user = this.authService.decodeToken() as UserModel;

  constructor(private vetService: VetService, private snackbar: MatSnackBar, private dialog: MatDialog, private authService: AuthService) { }

  ngOnInit(): void {
    this.vetService.getPets().subscribe(
      (rep) => {
        this.pets = rep;
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
