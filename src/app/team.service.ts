import { Injectable } from '@angular/core';

interface Team {
  id: number;
  name: string;
  score: number;
}

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private teams: Team[] = [];

  constructor() {
    this.loadTeams();
  }

  private saveTeams() {
    localStorage.setItem('teams', JSON.stringify(this.teams));
  }

  private loadTeams() {
    const savedTeams = localStorage.getItem('teams');
    this.teams = savedTeams ? JSON.parse(savedTeams) : [];
  }

  getTeams(): Team[] {
    return this.teams;
  }

  addTeam(name: string, score: number): void {
    const newTeam: Team = {
      id: this.teams.length + 1,
      name,
      score,
    };
    this.teams.push(newTeam);
    this.saveTeams();
  }

  updateScore(teamId: number, newScore: number): void {
    const team = this.teams.find(t => t.id === teamId);
    if (team) {
      team.score = newScore;
      this.saveTeams();
    }
  }

  getTeamsSorted(): Team[] {
    return [...this.teams].sort((a, b) => b.score - a.score);
  }
}
