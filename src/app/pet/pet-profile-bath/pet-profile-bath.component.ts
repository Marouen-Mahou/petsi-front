import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-profile-bath',
  templateUrl: './pet-profile-bath.component.html',
  styleUrls: ['./pet-profile-bath.component.sass']
})
export class PetProfileBathComponent implements OnInit {
  displayedColumns = [ 'Date', 'Description', 'Done'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }
}

export interface PeriodicElement {
  description: string;
  date: string;
  done: boolean;
}


const ELEMENT_DATA: PeriodicElement[] = [
  { date: "25 juin 2021", description: 'Bath 1', done: true},
  { date: "25 juin 2021", description: 'Bath 2', done: false},
];

