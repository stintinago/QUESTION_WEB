import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ExamComponent } from './form/exam.component';
import { ExamRoutingModule } from './exam-routing.module';


@NgModule({
  declarations: [
    ExamComponent
  ],
  imports: [
    CommonModule,
    ExamRoutingModule
  ]
})
export class ExamModule { }
