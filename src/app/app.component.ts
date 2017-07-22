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

  constructor(private http: Http) { } 

  ngOnInit(): void {
		this.getData().subscribe((data: any) => {
			this.players = data.data.team.players;
			console.log(this.players);
		});
	}

	getData(): Observable<any> {
		return this.http.get('./assets/team-6.json')
			.map(response => {
				return response.json();
			})
	}

  onDrop(data: any) {
    console.log('dropped:', data);
  }

}
