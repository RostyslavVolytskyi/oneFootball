import { Component } from '@angular/core';

@Component({
  selector: 'field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.sass']
})
export class FieldComponent {

	public playerData: any;

  constructor() { }

  onDrop(data: any, playerComp: any) {
  	let playerId = playerComp.viewContainerRef.element.nativeElement.id;
  	this.playerData = {data, playerId};
  }

}
