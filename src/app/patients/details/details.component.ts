import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientsService } from '../patients.service';
import { PatientModel } from '../../models/patient.model'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id = this.route.snapshot.params['id'];
  patient:any;
  rapport :string="";

  constructor(
    private route: ActivatedRoute,
    private patientsService: PatientsService,
    ) { }

  ngOnInit(): void {
    this.patientsService.getPatient(this.id).subscribe(
      (rep) => {
        this.patient = rep;
        this.rapport = this.patient.rapport;
      },
      (err) => {
        console.log(err);
      }
    )

  }


}
