import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { elementAt } from 'rxjs';
import { VaccineService } from './vaccine.service';

@Component({
  selector: 'app-pet-vaccine',
  templateUrl: './pet-vaccine.component.html',
  styleUrls: ['./pet-vaccine.component.scss']
})
export class PetVaccineComponent implements OnInit {
  displayedColumns = ['Name', 'Veterinary', 'Date', 'Description', 'Done'];
  dataSource:Vaccine[] = [];

  constructor(private vaccineService: VaccineService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.vaccineService.getVaccines().subscribe(
      (vaccines) => {
        this.dataSource = vaccines
      },
      (error) => {
        console.log(error)
      }
    )

  }

  addVaccine(form: NgForm) {
    console.log(form.form.value)
    let vaccine = form.form.value
    vaccine.pet = "619c0bf005aa5bbb9a5e3ca7"
    vaccine.vet = "6197a28776e21304b3445f3e"
    vaccine.done = "false"

    this.vaccineService.addVaccines(vaccine).subscribe(
      (reponse) => {
            this.snackbar.open('Vaccine added', 'Close', {
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



export interface Vaccine {
  _id: string,
  name: string;
  vet: string;
  date: string;
  description: string;
  done: boolean;
}