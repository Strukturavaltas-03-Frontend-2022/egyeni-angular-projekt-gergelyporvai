import { Component, Input, OnInit } from '@angular/core';
import { Trip } from 'src/app/model/trip';
import { TripService } from 'src/app/service/trip.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() trip: Trip = new Trip();

  constructor() {}

  ngOnInit(): void {}
}
