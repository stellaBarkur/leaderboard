import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { UpdateScoreComponent } from './update-score/update-score.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTeamComponent,
    UpdateScoreComponent,
    ScoreboardComponent,
    LeaderboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule // Import FormsModule for two-way binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
