import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';;
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AddTwittyComponent } from './add-twitty/add-twitty.component';
import { HomeComponent } from './home/home.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { DisplayTwittyComponent } from './display-twitty/display-twitty.component';


@NgModule({
  imports:      [
     BrowserModule,
      FormsModule ,
      RouterModule.forRoot([
        {path: "time-line", component: TimeLineComponent},
        {path: "add-twitty", component: AddTwittyComponent}
      ]),
      ReactiveFormsModule
  ],
  declarations: [
    AppComponent, 
    HelloComponent,
    AddTwittyComponent,
    HomeComponent,
    TimeLineComponent,
    DisplayTwittyComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
