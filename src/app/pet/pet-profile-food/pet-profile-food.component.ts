import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-profile-food',
  templateUrl: './pet-profile-food.component.html',
  styleUrls: ['./pet-profile-food.component.sass']
})
export class PetProfileFoodComponent implements OnInit {
  displayedColumns = ['Name', 'Quantity', 'Date', 'Done'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}


export interface PeriodicElement {
  name: string;
  quantity: number;
  date: string;
  done: boolean;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Food 1', quantity: 25, date: "25 juin 2021", done: true},
  {name: 'Food 2', quantity: 25, date: "25 juin 2021", done: false},
];
