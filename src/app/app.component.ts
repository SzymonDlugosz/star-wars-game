import { Component } from '@angular/core';
import { HttpConnectorService } from './service/http-connector.service';
import { Fighter } from './objects/Fighter';
import { StarWarsFilmApi } from './objects/StarWarsFilmApi';
import {Player} from './objects/Player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  filmApi: StarWarsFilmApi;
  gameType: boolean = false;
  firstPlayer: Player = new Player( new Fighter(0, 0), 0, false);
  secondPlayer: Player = new Player( new Fighter(0, 0), 0, false);

  constructor(private httpService: HttpConnectorService) {
    this.httpService.init().subscribe(x => this.filmApi = x);
  }

  randomizeCharacker(typeOfGame: boolean) {
    const charackerValuesFromApi = typeOfGame ? this.filmApi.characters : this.filmApi.starships;
    this.httpService.getDataForPlayer(charackerValuesFromApi[Math.floor(Math.random() * charackerValuesFromApi.length)]).toPromise()
      .then(firstObjectToFight => {
        this.firstPlayer.fighter = firstObjectToFight;
      })
      .then(() => this.httpService.getDataForPlayer(charackerValuesFromApi[Math.floor(Math.random() * charackerValuesFromApi.length)]).toPromise()
        .then(secondObjectToFight => {
          this.secondPlayer.fighter = secondObjectToFight;
        })).then(() => typeOfGame ? this.checkWinner(this.firstPlayer.fighter.mass, this.secondPlayer.fighter.mass)
      : this.checkWinner(this.firstPlayer.fighter.crew, this.secondPlayer.fighter.crew));
  }

  checkWinner(valueForPlayerOne: number, valueForPlayerTwo: number) {
    this.firstPlayer.winner = false;
    this.secondPlayer.winner = false;
    if (valueForPlayerOne > valueForPlayerTwo) {
      this.firstPlayer.counterWons++;
      this.firstPlayer.winner = true;
    }
    else if (valueForPlayerTwo > valueForPlayerOne) {
      this.secondPlayer.counterWons++;
      this.secondPlayer.winner = true;
    }
  }

  onChangeGameType(people: boolean) {
    this.gameType = people;
    this.firstPlayer = new Player( new Fighter(0, 0), 0, false);
    this.secondPlayer = new Player( new Fighter(0, 0), 0, false);
  }
}
