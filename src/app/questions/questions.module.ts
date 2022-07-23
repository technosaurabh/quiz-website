import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from './questions.component';
import {  Routes, RouterModule} from '@angular/router';


const routes : Routes = [
  { path: 'b', component: QuestionsComponent }
]



@NgModule({
  declarations: [
    QuestionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ]
})
export class QuestionsModule { }
