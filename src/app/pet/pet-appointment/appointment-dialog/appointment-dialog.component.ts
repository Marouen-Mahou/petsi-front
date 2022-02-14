import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PetAppointmentService } from '../pet-appointment.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-appointment-dialog',
  templateUrl: './appointment-dialog.component.html',
  styleUrls: ['./appointment-dialog.component.scss']
})
export class AppointmentDialogComponent implements OnInit {

  vets: Vet[] = []

  constructor(private dialogRef: MatDialogRef<AppointmentDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Appointment, private appointmentService: PetAppointmentService) { }

  ngOnInit(): void {
    this.getVets()
  }

  save(form: NgForm) {
      this.dialogRef.close({
        id: this.data._id,
        data :form.form.value});
  }

  close() {
      this.dialogRef.close();
  }

  getVets() {
    this.appointmentService.getAllVets().subscribe(
      (response) => {
        this.vets = response
      },
      (error) => {
        console.log(error)
      }
    )
  }
}

export interface Appointment {
  _id: string,
  place: string;
  vet: any;
  pet: any;
  date: string;
  report: string;
  done: boolean;
}

export interface Vet {
  _id: string,
  firstName: string,
  lastName: string
}