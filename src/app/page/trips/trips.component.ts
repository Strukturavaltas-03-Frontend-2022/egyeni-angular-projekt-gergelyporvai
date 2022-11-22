import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Trip } from 'src/app/model/trip';
import { TripService } from 'src/app/service/trip.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss'],
})
export class TripsComponent implements OnInit {
  constructor(private tripService: TripService) {}

  searchPhrase: string = '';

  onDelete(trip: Trip): void {
    this.tripService
      .remove(trip)
      .subscribe((trip) => (this.tripList$ = this.tripService.getAll()));
  }

  tripList$: Observable<Trip[]> = this.tripService.getAll();

  ngOnInit(): void {}
}
