import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamComponent } from './form/exam.component';

const routes: Routes = [
  {
    path: 'exam',
    component: ExamComponent,

  }, 
  { path: '**', redirectTo: 'exam' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamRoutingModule { }
