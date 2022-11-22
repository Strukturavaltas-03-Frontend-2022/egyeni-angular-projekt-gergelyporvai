import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Trip } from 'src/app/model/trip';
import { TripService } from 'src/app/service/trip.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(private tripService: TripService) {}

  searchPhrase: string = '';

  tripList$: Observable<Trip[]> = this.tripService.getAll();

  onDelete(trip: Trip): void {
    this.tripService
      .remove(trip)
      .subscribe((trip) => (this.tripList$ = this.tripService.getAll()));
  }

  ngOnInit(): void {}
}
