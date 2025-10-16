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
  teamCount: number | null = null;
  teams = this.teamService.getTeams();
  editIndex: number | null = null;
  editName: string = '';
  editScore: number | null = null;
  errorMessage: string = '';

  constructor(private teamService: TeamService) {}

  addTeam() {
    if (this.teamName.trim() && this.teamScore !== null) {
      this.teamService.addTeam(this.teamName, this.teamScore);
      this.teamName = '';
      this.teamScore = null;
      this.refreshScores();
    }
  }

  // 🆕 Generate multiple teams (same as before)
  generateTeams() {
    this.errorMessage = '';

    if (this.teamCount === null || this.teamCount < 1) {
      this.errorMessage = 'Please enter a valid number of teams.';
      return;
    }

    if (this.teamCount > 20) {
      this.errorMessage = 'Maximum of 20 teams allowed.';
      return;
    }

    localStorage.clear();
    for (let i = 1; i <= this.teamCount; i++) {
      this.teamService.addTeam(`Team ${i}`, 0);
    }

    this.teamCount = null;
    this.refreshScores();
  }

  startEditing(index: number, name: string, score: number) {
    this.editIndex = index;
    this.editName = name;
    this.editScore = score;
  }

  // ✅ Save both name & score edits
  saveChanges(teamId: number) {
    if (this.editName.trim() && this.editScore !== null) {
      this.teamService.updateTeam(teamId, this.editName, this.editScore);
      this.editIndex = null;
      this.editName = '';
      this.editScore = null;
      this.refreshScores();
    }
  }

  refreshScores() {
    this.teams = this.teamService.getTeams();
  }

  ClearAll() {
    localStorage.clear();
    this.refreshScores();
  }
}
