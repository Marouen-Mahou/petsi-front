import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss']
})
export class PatientsListComponent implements OnInit {

  patients: any[] = [];

  constructor(private patientsService: PatientsService) { }

  ngOnInit(): void {
    this.patientsService.getPatients().subscribe(
      (rep) => {
        this.patients = rep;
      },
      (err) => {
        console.log(err);
      }
    )
  }


}
