import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  patients: any[] = [];
  user = this.authService.decodeToken() as UserModel;
  id = this.user.id;

  constructor(private patientsService: PatientsService, private authService : AuthService) { }

  ngOnInit(): void {
    this.getRequests();
  }

  accept(id:string){
    this.patientsService.acceptRequest(id).subscribe(
      (rep) => {
        this.getRequests();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  decline(id:string){
    this.patientsService.declineRequest(id).subscribe(
      (rep) => {
        this.getRequests();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getRequests(){
    this.patientsService.getRequests(this.id).subscribe(
      (rep) => {
        this.patients = rep;
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
