import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PetAppointmentService } from '../pet-appointment/pet-appointment.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as moment from "moment";

@Component({
  selector: 'app-pet-profile-appointment',
  templateUrl: './pet-profile-appointment.component.html',
  styleUrls: ['./pet-profile-appointment.component.sass']
})
export class PetProfileAppointmentComponent implements OnInit {
  displayedColumns = [ 'Veterinary', 'Location', 'Date', 'Report', 'Done'];
  dataSource:Appointment[] = [];
  petId:any = '';

  constructor(private appointmentService: PetAppointmentService, 
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.petId = params.get('id');
    })
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