import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, switchMap } from 'rxjs/operators';
import { People } from '../$models/people';
import { PeopleDetails } from '../$models/people-details';
import { Planet } from '../$models/planet';


@Injectable({
    providedIn: 'root'
  })
export class PeopleService {

  private starWarsUrl = 'https://swapi.co/api/people/';

    constructor(private http: HttpClient) { }

    getPeople(): Observable<People[]> {
      return this.http.get<People[]>(this.starWarsUrl).pipe(
        map((res: any) => res.results,
        catchError(this.handleError<PeopleDetails>('getPeople', ))));
    }

    getPeopleById(id: string): Observable<PeopleDetails> {
      return this.http.get<PeopleDetails>(`${this.starWarsUrl}${id}`).pipe(
      catchError(this.handleError<PeopleDetails>('getPeopleById', )));

    }


    getHomeWorld(url: string): Observable<Planet> {
      return this.http.get<Planet>(url).pipe(
        catchError(this.handleError<Planet>('getHomeWorld', )));
    }

      private handleError<T>(operation = 'operation', result?: T) {
          return (error: any): Observable<T> => {
          return of(result as T);
        };
      }


}
