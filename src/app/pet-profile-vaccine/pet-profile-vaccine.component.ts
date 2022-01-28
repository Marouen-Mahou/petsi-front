import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-profile-vaccine',
  templateUrl: './pet-profile-vaccine.component.html',
  styleUrls: ['./pet-profile-vaccine.component.sass']
})
export class PetProfileVaccineComponent implements OnInit {
  displayedColumns = ['Name', 'Veterinary', 'Date', 'Description', 'Done'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  name: string;
  veterinary: string;
  date: string;
  desc: string;
  done: boolean;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Vaccine 1', veterinary: 'Mouard', date: "25 juin 2021", desc: 'vaccine 1 desc', done: true},
  {name: 'Vaccine 2', veterinary: 'Mouard', date: "25 juin 2021", desc: 'vaccine 2 desc', done: false},
];
