import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EntryComponent } from './entry.component';
import { DisplayComponent } from './display.component';
import { SharedService } from './common.service';

const navRoutes: Routes = [
  {path: 'entry', component: EntryComponent},
  {path: 'display', component: DisplayComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(navRoutes)

  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
