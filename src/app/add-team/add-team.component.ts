import { Component } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent {
  teamName: string = '';
  teamScore: number | null = null;
  teams = this.teamService.getTeams();
  editIndex: number | null = null;
  editScore: number | null = null;

  constructor(private teamService: TeamService) {}

  addTeam() {
    if (this.teamName.trim() && this.teamScore !== null) {
      this.teamService.addTeam(this.teamName, this.teamScore);
      this.teamName = '';
      this.teamScore = null;
    }
    this.refreshScores();
  }

  startEditing(index: number, score: number) {
    this.editIndex = index;
    this.editScore = score;
  }

  saveScore(teamId: number) {
    if (this.editScore !== null) {
      this.teamService.updateScore(teamId, this.editScore);
      this.editIndex = null;
      this.editScore = null;
    }
    this.refreshScores();
  }

  refreshScores() {
    this.teams = this.teamService.getTeams();
  }

  ClearAll() {
    localStorage.clear();
  }
}
