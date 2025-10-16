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
    ]),
    trigger('pageEnter', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ]),
    trigger('cardEnter', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }),
        animate('700ms 100ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('rowEnter', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-10px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class LeaderboardComponent implements OnInit {
  sortedTeams = this.teamService.getTeamsSorted();
  leftTeams: any[] = [];
  rightTeams: any[] = [];
  leftTitle: string = '';
  rightTitle: string = '';

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.splitTeams();
  }

  // ✅ Dynamically split teams into two halves & update titles
  private splitTeams() {
    this.sortedTeams = this.teamService.getTeamsSorted();
    const total = this.sortedTeams.length;
    const half = Math.ceil(total / 2);

    this.leftTeams = this.sortedTeams.slice(0, half);
    this.rightTeams = this.sortedTeams.slice(half);

    // Dynamic column titles
    this.leftTitle = `Top 1 - ${half}`;
    this.rightTitle = total > half ? `Top ${half + 1} - ${total}` : '';
  }
}
