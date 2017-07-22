import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'app';
  players: any = [];
  playerData: any;

  constructor(private http: Http) { } 

  ngOnInit(): void {
		this.getData().subscribe((data: any) => {
			this.players = data.data.team.players;
		});
	}

	getData(): Observable<any> {
		return this.http.get('./assets/team-6.json')
			.map(response => {
				return response.json();
			})
	}

  onDrop(data: any, playerComp: any) {
  	let playerId = playerComp.viewContainerRef.element.nativeElement.id;
  	this.playerData = {data, playerId};
  }

}
