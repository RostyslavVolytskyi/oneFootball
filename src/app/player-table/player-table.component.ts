import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'player-table',
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.sass']
})
export class PlayerTableComponent implements OnInit {
  players: any = [];

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
}
