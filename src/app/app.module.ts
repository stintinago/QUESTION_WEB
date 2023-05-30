import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ExamComponent } from './exam/form/exam.component';


const appRoutes:Routes=[

  {path: '', component:LoginComponent},
  {path: '/exam', component:ExamComponent}
 
];

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
