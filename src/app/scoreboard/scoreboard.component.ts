import { Component, OnInit } from "@angular/core";
import { TeamService } from "../team.service";

@Component({
  selector: 'app-scoreboard',
  template: `
    <h2>Scoreboard</h2>
    <ul>
      <li *ngFor="let team of teams">{{ team.name }}: {{ team.score }}</li>
    </ul>
    <a routerLink="/add-team">Add Team</a>
    <a routerLink="/update-score">Update Score</a>
  `,
  styles: [`
    /* Additional styles if needed */
  `]
})
export class ScoreboardComponent implements OnInit {
  teams: any[] = [];

  constructor(private scoreboardService: TeamService) {}

  ngOnInit() {
    this.teams = this.scoreboardService.getTeams();
  }
}
