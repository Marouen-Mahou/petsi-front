import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { VaccineService } from '../vaccine.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-vaccine-dialog',
  templateUrl: './vaccine-dialog.component.html',
  styleUrls: ['./vaccine-dialog.component.scss']
})
export class VaccineDialogComponent implements OnInit {
  vets: Vet[] = []

  constructor(private dialogRef: MatDialogRef<VaccineDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Vaccine, private vaccineService: VaccineService) { }

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
  vet: any;
  pet: any;
  date: string;
  description: string;
  done: boolean;
}

export interface Vet {
  _id: string,
  firstName: string,
  lastName: string
}
