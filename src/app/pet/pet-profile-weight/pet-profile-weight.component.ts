import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WeightService } from './weight.service';

@Component({
  selector: 'app-pet-profile-weight',
  templateUrl: './pet-profile-weight.component.html',
  styleUrls: ['./pet-profile-weight.component.scss']
})
export class PetProfileWeightComponent implements OnInit {
  @Input() weight: string = '0'
  petId:any = '';

  constructor(
    private weightService: WeightService,
    private snackbar: MatSnackBar,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.petId = params.get('id');
    })
  }


  updateWeight(form: NgForm) {
    let newWeight = form.form.value.weight

    this.weightService.updateWeight(this.petId, newWeight ).subscribe(
      (reponse) => {
            this.weight = newWeight
            this.snackbar.open('Weight updated', 'Close', {
              duration: 3000
            });
      },
      (error) => {
        console.log(error)
      }
    )
    form.reset()
  }

}
