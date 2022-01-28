import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PetAppointmentService } from './pet-appointment.service';

@Component({
  selector: 'app-pet-appointment',
  templateUrl: './pet-appointment.component.html',
  styleUrls: ['./pet-appointment.component.scss']
})
export class PetAppointmentComponent implements OnInit {

  constructor(private appointmentService: PetAppointmentService) { }

  ngOnInit(): void {
    this.appointmentService.getAppointments().subscribe(
      (appointments) => {
            console.log(appointments)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  addVaccine(form: NgForm) {
    let appointment = form.form.value
    appointment.pet = "619c0bf005aa5bbb9a5e3ca7"
    appointment.vet = "6197a28776e21304b3445f3e"
    appointment.done = false

    this.appointmentService.addAppointment(appointment).subscribe(
      (reponse) => {
            console.log("reponse")
            console.log(reponse)
      },
      (error) => {
        console.log(error)
      }
    )
    form.reset()
  }

}
