import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { elementAt } from 'rxjs';
import { BathDialogComponent } from './bath-dialog/bath-dialog.component';
import { PetBathService } from './pet-bath.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as moment from "moment";

@Component({
  selector: 'app-pet-bath',
  templateUrl: './pet-bath.component.html',
  styleUrls: ['./pet-bath.component.scss']
})
export class PetBathComponent implements OnInit {
  displayedColumns = ['Date', 'Description', 'Done', 'Actions'];
  dataSource:Bath[] = [];
  vets: Vet[] = [];
  petId:any = '';

  constructor(private bathService: PetBathService,
     private snackbar: MatSnackBar,
      private dialog: MatDialog,
      private route: ActivatedRoute
      ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.petId = params.get('id');
    })
    this.getVets()
    this.getBaths()
  }

  getBaths( ){
    this.bathService.getBaths(this.petId).subscribe(
      (baths) => {
        this.dataSource = baths.filter(el => !el.deleted )
        this.dataSource = this.dataSource.map(el => ({...el, date: moment(el.date).format("DD/MM/YYYY")}))
      },
      (error) => {
        console.log(error)
      }
    )
  }

  addBath(form: NgForm) {
    let bath = form.form.value
    bath.pet = this.petId
    bath.done = "false"

    this.bathService.addBaths(bath).subscribe(
      (reponse) => {
            this.getBaths()
            this.snackbar.open('Bath added', 'Close', {
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
    this.bathService.updateBath(id, { done: value.toString() }).subscribe(
      (response) => {
        this.dataSource = this.dataSource.map( el => el._id == id ? { ...el, done: value}: el)
        this.snackbar.open('Bath updated', 'Close', {
          duration: 3000
        });
      },
      (error) => {
        console.log(error)
      }
    )
  }

  updateBath(bath: Bath) {
    const dialogRef = this.dialog.open(BathDialogComponent,{
      data: bath
    });

    dialogRef.afterClosed().subscribe(updatedData => {
      this.bathService.updateBath(updatedData.id, updatedData.data).subscribe(
        (response) => {
          this.getBaths()
          this.snackbar.open('Bath updated', 'Close', {
            duration: 3000
          });
        },
        (error) => {
          console.log(error)
        }
      )
    });
  }

  deleteBath(id: string) {
    this.bathService.deleteBath(id).subscribe(
      (response) => {
        this.dataSource = this.dataSource.filter( el => el._id != id )
        this.snackbar.open('Bath updated', 'Close', {
          duration: 3000
        });
      },
      (error) => {
        console.log(error)
      }
    )
  }

  getVets() {
    this.bathService.getAllVets().subscribe(
      (response) => {
        this.vets = response
      },
      (error) => {
        console.log(error)
      }
    )
  }

}



export interface Bath {
  _id: string,
  date: string;
  description: string;
  done: boolean;
}

export interface Vet {
  _id: string,
  firstName: string,
  lastName: string,
}