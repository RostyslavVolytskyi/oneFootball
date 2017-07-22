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

	allowDrop(ev) {
		console.log(ev);
    // ev.preventDefault();
	}

	dragPlayer(ev) {
		console.log(ev);
		// ev.dataTransfer.setData("text/html", "<p>Example paragraph</p>");
    // ev.dataTransfer.setData("text", ev.target.id);
	}

	dropPlayer(ev) {
		console.log(ev);

    // ev.preventDefault();
    // var data = ev.dataTransfer.getData("text");
    // ev.target.appendChild(document.getElementById(data));
	}

}
