import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { DataEntryComponent } from './inputdata.component';
import { AddEntryComponent } from './inputadd.component';
import { PrintEntryComponent } from './inputprint.component';
import { DisplayComponent } from './display.component';

@NgModule({
  declarations: [
    AppComponent,
    DataEntryComponent,
    AddEntryComponent,
    PrintEntryComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }