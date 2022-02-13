import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss']
})
export class PatientsListComponent implements OnInit {

  patients: any[] = [];
  user = this.authService.decodeToken() as UserModel;
  id = this.user.id;

  constructor(private patientsService: PatientsService,private authService: AuthService) { }

  ngOnInit(): void {
    this.patientsService.getPatients(this.id).subscribe(
      (rep) => {
        this.patients = rep;
      },
      (err) => {
        console.log(err);
      }
    )
  }


}
