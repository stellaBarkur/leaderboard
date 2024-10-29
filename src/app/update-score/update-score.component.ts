import { Component } from "@angular/core";
import { TeamService } from "../team.service";

@Component({
  selector: 'app-update-score',
  template: `
    <h2>Update Score</h2>
    <form (ngSubmit)="updateScore()">
      <input [(ngModel)]="teamName" name="teamName" placeholder="Team Name" required />
      <input [(ngModel)]="score" name="score" type="number" placeholder="New Score" required />
      <button type="submit">Update Score</button>
    </form>
    <a routerLink="/scoreboard">View Scoreboard</a>
  `,
  styles: [`
    /* Additional styles if needed */
  `]
})
export class UpdateScoreComponent {
  teamName: string = '';
  score: number = 0;

  constructor(private scoreboardService: TeamService) {}

  updateScore() {
    //this.scoreboardService.updateScore(this.teamName, this.score);
    this.teamName = '';
    this.score = 0;
  }
}
