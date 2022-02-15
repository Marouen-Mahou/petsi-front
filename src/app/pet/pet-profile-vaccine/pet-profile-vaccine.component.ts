import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { elementAt } from 'rxjs';
import { VaccineService } from '../pet-vaccine/vaccine.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as moment from "moment";

@Component({
  selector: 'app-pet-profile-vaccine',
  templateUrl: './pet-profile-vaccine.component.html',
  styleUrls: ['./pet-profile-vaccine.component.sass']
})
export class PetProfileVaccineComponent implements OnInit {
  displayedColumns = ['Name', 'Veterinary', 'Date', 'Description', 'Done'];
  dataSource:Vaccine[] = [];
  petId:any = '';

  constructor(private vaccineService: VaccineService,
      private route: ActivatedRoute
      ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.petId = params.get('id');
    })
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

}

export interface Vaccine {
  _id: string,
  name: string;
  vet: string;
  date: string;
  description: string;
  done: boolean;
}