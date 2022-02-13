import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id = this.route.snapshot.params['id'];
  patient:any;
  rapport :string="";
  newRapport = this.rapport;
  edit = false;

  constructor(
    private route: ActivatedRoute,
    private patientsService: PatientsService,
    ) { }

  ngOnInit(): void {
    this.patientsService.getPatient(this.id).subscribe(
      (rep) => {
        this.patient = rep;
        this.rapport = this.patient.rapport;
        this.newRapport = this.rapport;
      },
      (err) => {
        console.log(err);
      }
    )

  }

  editToggle(){
    this.edit = !this.edit;
  }

  addRapport(){
    this.patientsService.addRapport(this.patient._id,this.newRapport).subscribe(
      (rep) => {
        this.rapport = this.newRapport;
      },
      (err) => {
        console.log(err);
      }
    )
  }

  cancelRapport(){
    this.newRapport = this.rapport;

  }


}
