import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Trip } from 'src/app/model/trip';
import { TripsComponent } from 'src/app/page/trips/trips.component';
import { TripService } from 'src/app/service/trip.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() trip: Trip = new Trip();

  searchPhrase: string = '';

  tripList$: Observable<Trip[]> = this.tripService.getAll();

  // onDelete(trip: Trip): void {
  //   this.tripService.remove(trip).subscribe((trip) => {
  //     this.tripList$ = this.tripService.getAll();
  //     this.router.navigate(['/', 'trips']);
  //   });
  // }
  onDelete(trip: Trip): void {
    this.tripService.remove(trip).subscribe((trip) => {
      this.tripList$ = this.tripService.getAll();
    });
    this.router.navigate(['/', 'trips']);
  }

  constructor(private tripService: TripService, private router: Router) {}

  ngOnInit(): void {}
}
