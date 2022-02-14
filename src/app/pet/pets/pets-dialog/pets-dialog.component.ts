import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pets-dialog',
  templateUrl: './pets-dialog.component.html',
  styleUrls: ['./pets-dialog.component.scss']
})
export class PetsDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<PetsDialogComponent>) { }

  ngOnInit(): void {
  }

  save(form: NgForm) {
    this.dialogRef.close({
      data :form.form.value
    });
  }
  
  close() {
    this.dialogRef.close();
  }
}
