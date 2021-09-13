import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fighter } from '../objects/Fighter';
import { StarWarsFilmApi } from '../objects/StarWarsFilmApi';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpConnectorService {

  constructor(private http: HttpClient) {
  }

  init(): Observable<StarWarsFilmApi> {
    return this.http.get<StarWarsFilmApi>('https://swapi.dev/api/films/1/');
  }

  getDataForPlayer(singleCharacter: string): Observable<Fighter> {
    return this.http.get<Fighter>(singleCharacter);
  }
}
