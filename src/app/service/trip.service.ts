import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../model/trip';

@Injectable({
  providedIn: 'root',
})
export class TripService {
  apiUrl: string = 'http://localhost:3000/movies';

  getAll(page: string = ''): Observable<Trip[]> {
    return this.http.get<Trip[]>(`${this.apiUrl}${page}`);
  }

  get(id: number): Observable<Trip> {
    return this.http.get<Trip>(`${this.apiUrl}/${id}`);
  }

  create(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.apiUrl, trip);
  }

  update(trip: Trip): Observable<Trip> {
    return this.http.patch<Trip>(`${this.apiUrl}/${trip.id}`, trip);
  }

  remove(trip: Trip): Observable<Trip> {
    return this.http.delete<Trip>(`${this.apiUrl}/${trip.id}`);
  }

  constructor(private http: HttpClient) {}
}
