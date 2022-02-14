import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-profile-appointment',
  templateUrl: './pet-profile-appointment.component.html',
  styleUrls: ['./pet-profile-appointment.component.sass']
})
export class PetProfileAppointmentComponent implements OnInit {
  displayedColumns = ['Veterinary', 'Location', 'Date', 'Done', 'Description'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  veterinary: string;
  location: string;
  date: string;
  done: boolean;
  desc: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {veterinary: 'Mouard', location: 'Zahra', date: "25 juin 2021", done: true, desc: 'vaccine 1 desc'},
  {veterinary: 'Mouard', location: 'Zahra', date: "25 juin 2021", done: true, desc: 'vaccine 2 desc'},
];
