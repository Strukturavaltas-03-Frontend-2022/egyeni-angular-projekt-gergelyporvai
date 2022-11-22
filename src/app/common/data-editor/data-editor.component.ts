import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Trip } from 'src/app/model/trip';
import { TripService } from 'src/app/service/trip.service';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss'],
})
export class DataEditorComponent implements OnInit {
  constructor(
    private tripService: TripService,
    private ar: ActivatedRoute,
    private router: Router
  ) {}

  trip$: Observable<Trip> = this.ar.params.pipe(
    switchMap((params) => this.tripService.get(params['id']))
  );

  onUpdate(trip: Trip): void {
    this.tripService
      .update(trip)
      .subscribe((product) => this.router.navigate(['/', 'admin']));
  }

  ngOnInit(): void {}
}
