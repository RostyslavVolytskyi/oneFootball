import { Component, OnChanges, Input, ViewContainerRef } from '@angular/core';
import { PlayerData } from '../shared/models/player-data.model';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.sass']
})
export class PlayerComponent implements OnChanges {

	@Input() playerData: PlayerData;
	playerInfo: PlayerData;

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnChanges() {
  	if(this.playerData) {
  		let id = this.viewContainerRef.element.nativeElement.id;
	  	if(this.playerData.playerId == id) {
	  		this.playerInfo = this.playerData;
	  	}
  	}
  }
}
