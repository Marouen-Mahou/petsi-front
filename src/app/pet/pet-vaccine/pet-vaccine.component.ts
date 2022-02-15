import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { elementAt } from 'rxjs';
import { VaccineDialogComponent } from './vaccine-dialog/vaccine-dialog.component';
import { VaccineService } from './vaccine.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as moment from "moment";

@Component({
  selector: 'app-pet-vaccine',
  templateUrl: './pet-vaccine.component.html',
  styleUrls: ['./pet-vaccine.component.scss']
})
export class PetVaccineComponent implements OnInit {
  displayedColumns = ['Name', 'Veterinary', 'Date', 'Description', 'Done', 'Actions'];
  dataSource:Vaccine[] = [];
  vets: Vet[] = [];
  petId:any = '';

  constructor(private vaccineService: VaccineService,
     private snackbar: MatSnackBar,
      private dialog: MatDialog,
      private route: ActivatedRoute
      ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.petId = params.get('id');
    })
    this.getVets()
    this.getVaccines()
  }

  getVaccines( ){
    this.vaccineService.getVaccines(this.petId).subscribe(
      (vaccines) => {
        this.dataSource = vaccines.filter(el => !el.deleted )
        this.dataSource = this.dataSource.map(el => ({...el, date: moment(el.date).format("DD/MM/YYYY")}))
      },
      (error) => {
        console.log(error)
      }
    )
  }

  addVaccine(form: NgForm) {
    let vaccine = form.form.value
    vaccine.pet = this.petId
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

  updateVaccine(vaccine: Vaccine) {
    const dialogRef = this.dialog.open(VaccineDialogComponent,{
      data: vaccine
    });

    dialogRef.afterClosed().subscribe(updatedData => {
      this.vaccineService.updateVaccine(updatedData.id, updatedData.data).subscribe(
        (response) => {
          this.getVaccines()
          this.snackbar.open('Vaccine updated', 'Close', {
            duration: 3000
          });
        },
        (error) => {
          console.log(error)
        }
      )
    });
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

  getVets() {
    this.vaccineService.getAllVets().subscribe(
      (response) => {
        this.vets = response
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

export interface Vet {
  _id: string,
  firstName: string,
  lastName: string,
}