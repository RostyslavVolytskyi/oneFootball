import { Component, ViewContainerRef } from '@angular/core';
import { PlayerData } from '../shared/models/player-data.model';
import { PlayerCompData } from '../shared/models/player-component.model';

@Component({
  selector: 'field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.sass']
})
export class FieldComponent {

	playerData: {data: PlayerData; playerId: string};

  constructor() { }

  onDrop(data: PlayerData, playerCompData: PlayerCompData) {
  	let playerId = playerCompData.viewContainerRef.element.nativeElement.id;
  	this.playerData = {data, playerId};
  }
}
