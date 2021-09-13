import { Component, Input } from '@angular/core';
import { Player } from '../objects/Player';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  player: Player;

  constructor() {
  }
}
