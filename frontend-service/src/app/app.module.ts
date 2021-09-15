import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BatchStudentListComponent } from './batch-student-list/batch-student-list.component';
 
@NgModule({
  declarations: [
    AppComponent,
    BatchStudentListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
