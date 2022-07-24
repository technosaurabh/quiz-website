import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionsModule } from './questions/questions.module';
import { ScoreComponent } from './score/score.component';

const routes : Routes = [  
  {
    path: '', component: LoginComponent 
  },
  // {
  //   path: 'questions', component : QuestionsComponent
  // },

  // {
  //   path: 'score', component : ScoreComponent
  // },

  // {
  //   path: 'auth', component : QuestionsComponent
  // }
]



@NgModule({ 
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
