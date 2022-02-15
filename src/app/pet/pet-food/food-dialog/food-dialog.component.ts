import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FoodService } from '../pet-food.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-food-dialog',
  templateUrl: './food-dialog.component.html',
  styleUrls: ['./food-dialog.component.scss']
})
export class FoodDialogComponent implements OnInit {
  vets: Vet[] = []

  constructor(private dialogRef: MatDialogRef<FoodDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Food, private foodService: FoodService) { }

  ngOnInit(): void {
    this.getVets()
  }

  save(form: NgForm) {
      this.dialogRef.close({
        id: this.data._id,
        data :form.form.value});
  }

  close() {
      this.dialogRef.close();
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
  lastName: string
}

