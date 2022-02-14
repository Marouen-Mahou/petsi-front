import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PetBathService } from '../pet-bath.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bath-dialog',
  templateUrl: './bath-dialog.component.html',
  styleUrls: ['./bath-dialog.component.scss']
})
export class BathDialogComponent implements OnInit {
  vets: Vet[] = []

  constructor(private dialogRef: MatDialogRef<BathDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Bath, private bathService: PetBathService) { }

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

