import { Component, OnInit } from '@angular/core';
import { VetService } from '../vet.service';

@Component({
  selector: 'app-vets',
  templateUrl: './vets.component.html',
  styleUrls: ['./vets.component.scss']
})
export class VetsComponent implements OnInit {
  vets: any[] = [];

  constructor(private vetService: VetService) { }

  ngOnInit(): void {
    this.vetService.getAllVets().subscribe(
      (rep) => {
        this.vets = rep;
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
