import {Fighter} from './Fighter';

export class Player {
  fighter: Fighter;
  counterWons: number = 0;
  winner: boolean = false;
  constructor(fighter: Fighter, counterWons: number, winner: boolean) {
    this.fighter = fighter;
    this.counterWons = counterWons;
    this.winner = winner;
  }
}
