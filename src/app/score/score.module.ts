import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreComponent } from './score.component';
import {  Routes, RouterModule} from '@angular/router';

const routes : Routes = [
  { path: 'score', component: ScoreComponent }
]


@NgModule({
  declarations: [
    ScoreComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    
  ]
})
export class ScoreModule { }
