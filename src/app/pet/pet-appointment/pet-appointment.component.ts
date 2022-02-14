import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PetAppointmentService } from './pet-appointment.service';

@Component({
  selector: 'app-pet-appointment',
  templateUrl: './pet-appointment.component.html',
  styleUrls: ['./pet-appointment.component.scss']
})
export class PetAppointmentComponent implements OnInit {

  constructor(private appointmentService: PetAppointmentService, private snackbar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAppointments()
  }

  getAppointments( ){
    this.appointmentService.getAppointments().subscribe(
      (appointments) => {
            console.log(appointments)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  addAppointment(form: NgForm) {
    let appointment = form.form.value
    appointment.pet = "619c0bf005aa5bbb9a5e3ca7"
    appointment.vet = "6197a28776e21304b3445f3e"
    appointment.done = "false"

    this.appointmentService.addAppointment(appointment).subscribe(
      (reponse) => {
            this.getAppointments()
            this.snackbar.open('Appointment added', 'Close', {
              duration: 3000
            });
      },
      (error) => {
        console.log(error)
      }
    )
    form.reset()
  }

}
