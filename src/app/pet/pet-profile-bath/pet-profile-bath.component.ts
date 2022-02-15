import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { elementAt } from 'rxjs';
import { PetBathService } from '../pet-bath/pet-bath.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as moment from "moment";

@Component({
  selector: 'app-pet-profile-bath',
  templateUrl: './pet-profile-bath.component.html',
  styleUrls: ['./pet-profile-bath.component.sass']
})
export class PetProfileBathComponent implements OnInit {
  displayedColumns = ['Date', 'Description', 'Done'];
  dataSource:Bath[] = [];
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

}



export interface Bath {
  _id: string,
  date: string;
  description: string;
  done: boolean;
}