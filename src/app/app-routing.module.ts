import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTeamComponent } from './add-team/add-team.component';
import { UpdateScoreComponent } from './update-score/update-score.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

const routes: Routes = [
  { path: 'add-team', component: AddTeamComponent },
  { path: 'update-score', component: UpdateScoreComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: '', redirectTo: '/add-team', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
