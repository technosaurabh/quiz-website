import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { QuestionsModule } from './questions/questions.module';


const routes : Routes = [  


  {path :'',component : AppComponent},
  { path: '', loadChildren: () => import('./questions/questions.module').then(m => m.QuestionsModule),
 },
  // { path: 'dashboard', loadChildren: () => import('./questions/questions.module').then(m => m.QuestionsModule), },
]

@NgModule({ 
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
