import { Component, OnChanges, Input, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.sass']
})
export class PlayerComponent implements OnChanges {

	@Input() playerData: any;
	public playerInfo: any;

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
