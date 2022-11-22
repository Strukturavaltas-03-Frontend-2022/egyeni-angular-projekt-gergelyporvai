import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Trip } from 'src/app/model/trip';
import { TripService } from 'src/app/service/trip.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
  constructor(private tripService: TripService, private router: Router) {}

  tripList$: Observable<Trip[]> = this.tripService.getAll();

  trip: Trip = new Trip();

  enterNew(trip: Trip): void {
    this.tripService
      .create(trip)
      .subscribe((trip) => this.router.navigate(['/', 'trips']));
  }

  ngOnInit(): void {}
}
