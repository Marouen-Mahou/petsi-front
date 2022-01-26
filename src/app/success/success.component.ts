import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  message="";
  next="";
  link="";


  ngOnInit(): void {
    this.message = this.route.snapshot.params["message"];
    this.next = this.route.snapshot.params["next"];
    this.link = this.route.snapshot.params["link"];
  }

}
