import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.sass']
})
export class FieldComponent implements OnInit {

	public playerData: any;

  constructor() { }

  ngOnInit() { }

  onDrop(data: any, playerComp: any) {
  	let playerId = playerComp.viewContainerRef.element.nativeElement.id;
  	this.playerData = {data, playerId};
  }

}
