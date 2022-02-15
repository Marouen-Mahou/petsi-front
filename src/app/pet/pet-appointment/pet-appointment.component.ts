import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppointmentDialogComponent } from './appointment-dialog/appointment-dialog.component';
import { PetAppointmentService } from './pet-appointment.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as moment from "moment";

@Component({
  selector: 'app-pet-appointment',
  templateUrl: './pet-appointment.component.html',
  styleUrls: ['./pet-appointment.component.scss']
})
export class PetAppointmentComponent implements OnInit {
  displayedColumns = [ 'Veterinary', 'Location', 'Date', 'Report', 'Done', 'Actions'];
  dataSource:Appointment[] = [];
  vets: Vet[] = [];
  petId:any = '';

  constructor(private appointmentService: PetAppointmentService, 
    private snackbar: MatSnackBar, 
    private dialog: MatDialog,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.petId = params.get('id');
    })
    this.getVets()
    this.getAppointments()
  }

  getAppointments( ){
    this.appointmentService.getAppointments(this.petId).subscribe(
      (appointments) => {
        this.dataSource = appointments.filter(el => !el.deleted )
        this.dataSource = this.dataSource.map(el => ({...el, date: moment(el.date).format("DD/MM/YYYY")}))
      },
      (error) => {
        console.log(error)
      }
    )
  }

  addAppointment(form: NgForm) {
    let appointment = form.form.value
    appointment.pet = this.petId
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

  deleteAppointment(id: string) {
    this.appointmentService.deleteAppointment(id).subscribe(
      (response) => {
        this.dataSource = this.dataSource.filter( el => el._id != id )
        this.snackbar.open('Appointment deleted', 'Close', {
          duration: 3000
        });
      },
      (error) => {
        console.log(error)
      }
    )
  }

  updateAppointment(appointment: Appointment) {
    
    const dialogRef = this.dialog.open(AppointmentDialogComponent,{
      data: appointment
    });

    dialogRef.afterClosed().subscribe(updatedData => {
      this.appointmentService.updateAppointment(updatedData.id, updatedData.data).subscribe(
        (response) => {
          this.getAppointments()
          this.snackbar.open('Appointment updated', 'Close', {
            duration: 3000
          });
        },
        (error) => {
          console.log(error)
        }
      )
    });
  }

  updateDone(id: string, value: boolean) {
    this.appointmentService.updateAppointment(id, { done: value.toString() }).subscribe(
      (response) => {
        this.dataSource = this.dataSource.map( el => el._id == id ? { ...el, done: value}: el)
        this.snackbar.open('Appointment updated', 'Close', {
          duration: 3000
        });
      },
      (error) => {
        console.log(error)
      }
    )
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
  location: string;
  vet: string;
  date: string;
  report: string;
  done: boolean;
}

export interface Vet {
  _id: string,
  firstName: string,
  lastName: string,
}