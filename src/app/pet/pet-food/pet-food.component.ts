import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { elementAt } from 'rxjs';
import { FoodDialogComponent } from './food-dialog/food-dialog.component';
import { FoodService } from './pet-food.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as moment from "moment";


@Component({
  selector: 'app-pet-food',
  templateUrl: './pet-food.component.html',
  styleUrls: ['./pet-food.component.scss']
})
export class PetFoodComponent implements OnInit {

  displayedColumns = ['Name', 'Quantity','Date', 'Done', 'Actions'];
  dataSource:Food[] = [];
  vets: Vet[] = [];
  petId:any = '';

  constructor(private foodService: FoodService,
     private snackbar: MatSnackBar,
      private dialog: MatDialog,
      private route: ActivatedRoute
      ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.petId = params.get('id');
    })
    this.getVets()
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

  addFood(form: NgForm) {
    let food = form.form.value
    food.pet = this.petId
    food.done = "false"

    this.foodService.addFoods(food).subscribe(
      (reponse) => {
            this.getFoods()
            this.snackbar.open('Food added', 'Close', {
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
    this.foodService.updateFood(id, { done: value.toString() }).subscribe(
      (response) => {
        this.dataSource = this.dataSource.map( el => el._id == id ? { ...el, done: value}: el)
        this.snackbar.open('Food updated', 'Close', {
          duration: 3000
        });
      },
      (error) => {
        console.log(error)
      }
    )
  }

  updateFood(food: Food) {
    const dialogRef = this.dialog.open(FoodDialogComponent,{
      data: food
    });

    dialogRef.afterClosed().subscribe(updatedData => {
      this.foodService.updateFood(updatedData.id, updatedData.data).subscribe(
        (response) => {
          this.getFoods()
          this.snackbar.open('Food updated', 'Close', {
            duration: 3000
          });
        },
        (error) => {
          console.log(error)
        }
      )
    });
  }

  deleteFood(id: string) {
    this.foodService.deleteFood(id).subscribe(
      (response) => {
        this.dataSource = this.dataSource.filter( el => el._id != id )
        this.snackbar.open('Food updated', 'Close', {
          duration: 3000
        });
      },
      (error) => {
        console.log(error)
      }
    )
  }

  getVets() {
    this.foodService.getAllVets().subscribe(
      (response) => {
        this.vets = response
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

export interface Vet {
  _id: string,
  firstName: string,
  lastName: string,
}
