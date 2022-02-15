import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { elementAt } from 'rxjs';
import { FoodService } from '../pet-food/pet-food.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as moment from "moment";


@Component({
  selector: 'app-pet-profile-food',
  templateUrl: './pet-profile-food.component.html',
  styleUrls: ['./pet-profile-food.component.sass']
})
export class PetProfileFoodComponent implements OnInit {
  displayedColumns = ['Name', 'Quantity','Date', 'Done'];
  dataSource:Food[] = [];
  petId:any = '';

  constructor(private foodService: FoodService,
      private route: ActivatedRoute
      ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.petId = params.get('id');
    })
    this.getFoods()
  }

  getFoods( ){
    this.foodService.getFoods(this.petId).subscribe(
      (foods) => {
        this.dataSource = foods.filter(el => !el.deleted )
        this.dataSource = this.dataSource.map(el => ({...el, date: moment(el.date).format("DD/MM/YYYY")}))
      },
      (error) => {
        console.log(error)
      }
    )
  }

}



export interface Food {
  _id: string;
  date: string;
  quantity: string;
  name: string;
  done: boolean;
}
