import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { QuestionsModule } from './questions/questions.module';


const routes : Routes = [  

  {path: '', component: LoginComponent}
  // { path: 'dashboard', loadChildren: () => import('./questions/questions.module').then(m => m.QuestionsModule), },
]

@NgModule({ 
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
