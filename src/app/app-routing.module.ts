import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsModule } from './questions/questions.module';


const routes : Routes = [  
  { path: './a', loadChildren: () => import('./questions/questions.module').then(m => m.QuestionsModule), }
  // { path: 'dashboard', loadChildren: () => import('./questions/questions.module').then(m => m.QuestionsModule), },
]

@NgModule({ 
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
