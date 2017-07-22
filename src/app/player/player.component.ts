import { Component, OnInit, OnChanges, Input, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.sass']
})
export class PlayerComponent implements OnInit, OnChanges {

	@Input() playerData: any;
	playerInfo: any;

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnChanges() {
  	if(this.playerData) {
  		let id = this.viewContainerRef.element.nativeElement.id;
	  	if(this.playerData.id == id) {
	  		this.playerInfo = this.playerData;
	  	}
  	}
  }

  ngOnInit() { }

}
