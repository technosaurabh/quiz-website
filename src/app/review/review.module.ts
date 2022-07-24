import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewComponent } from './review.component';
import {  Routes, RouterModule} from '@angular/router';

const routes : Routes = [
  { path: 'review', component: ReviewComponent }
]

@NgModule({
  declarations: [
    ReviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class ReviewModule { }
