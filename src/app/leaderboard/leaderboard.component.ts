import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
  animations: [
    trigger('fadeInAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class LeaderboardComponent implements OnInit {
  sortedTeams = this.teamService.getTeamsSorted();

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {}
}
