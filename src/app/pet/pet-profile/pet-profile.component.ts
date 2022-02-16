import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PetProfileService } from './pet-profile.service';
import * as moment from 'moment'

@Component({
  selector: 'app-pet-profile',
  templateUrl: './pet-profile.component.html',
  styleUrls: ['./pet-profile.component.sass']
})
export class PetProfileComponent implements OnInit {
  pet:any = {}
  petId:any = ''
  constructor(private route: ActivatedRoute, private petProfileService: PetProfileService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.petId = params.get('id');
      this.petProfileService.getPet(this.petId).subscribe(
        (rep) => {
          this.pet = rep[0]
          this.pet.birthday = moment(this.pet.birthday).format("DD/MM/YYYY")


        },
        (err) => {
          console.log(err);
        }
      )
    });
  }

}
