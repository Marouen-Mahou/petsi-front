import { Component, OnInit } from '@angular/core';
import { PetsService } from './pets.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {

  patients: any[] = [];

  constructor(private petsService: PetsService) { }

  ngOnInit(): void {
    this.petsService.getPatients().subscribe(
      (rep) => {
        this.patients = rep;
      },
      (err) => {
        console.log(err);
      }
    )
  }


}
