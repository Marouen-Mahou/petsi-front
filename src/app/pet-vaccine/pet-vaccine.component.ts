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
  displayedColumns = ['Name', 'Veterinary', 'Date', 'Description', 'Done', 'Actions'];
  dataSource:Vaccine[] = [];

  constructor(private vaccineService: VaccineService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.getVaccines()
  }

  getVaccines( ){
    this.vaccineService.getVaccines().subscribe(
      (vaccines) => {
        this.dataSource = vaccines.filter(el => !el.deleted )
      },
      (error) => {
        console.log(error)
      }
    )
  }

  addVaccine(form: NgForm) {
    let vaccine = form.form.value
    vaccine.pet = "619c0bf005aa5bbb9a5e3ca7"
    vaccine.vet = "6197a28776e21304b3445f3e"
    vaccine.done = "false"

    this.vaccineService.addVaccines(vaccine).subscribe(
      (reponse) => {
            this.getVaccines()
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

  updateDone(id: string, value: boolean) {
    this.vaccineService.updateVaccine(id, { done: value.toString() }).subscribe(
      (response) => {
        this.dataSource = this.dataSource.map( el => el._id == id ? { ...el, done: value}: el)
        this.snackbar.open('Vaccine updated', 'Close', {
          duration: 3000
        });
      },
      (error) => {
        console.log(error)
      }
    )
  }

  deleteVaccine(id: string) {
    this.vaccineService.deleteVaccine(id).subscribe(
      (response) => {
        this.dataSource = this.dataSource.filter( el => el._id != id )
        this.snackbar.open('Vaccine updated', 'Close', {
          duration: 3000
        });
      },
      (error) => {
        console.log(error)
      }
    )
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